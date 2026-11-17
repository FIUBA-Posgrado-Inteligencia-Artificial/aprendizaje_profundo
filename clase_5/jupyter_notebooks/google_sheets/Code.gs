function responder(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var p = JSON.parse(e.postData.contents);
    var props = PropertiesService.getScriptProperties();
    var token = props.getProperty('TOKEN_CLASE');
    var cohorte = props.getProperty('COHORTE_ACTIVA');
    if (!token || !cohorte || !props.getProperty('SHEET_ID')) {
      throw Error('Faltan propiedades del servidor');
    }
    if (!p || p.token !== token) throw Error('Token inválido');
    if (p.cohorte !== cohorte) throw Error('Cohorte inválida');
    if (p.protocolo !== 'CIFAR10_CNN_v1') throw Error('Protocolo inválido');
    if (!Number.isInteger(p.epochs) || p.epochs < 1) throw Error('Cantidad de épocas inválida');
    if (!/^[\p{L}\p{N}][\p{L}\p{N} _.-]{1,59}$/u.test(p.alumno)) throw Error('Alias inválido');
    if (!/^[0-9a-f-]{36}$/i.test(p.run_id) || !/^[0-9a-f]{32}$/i.test(p.sesion_id)) {
      throw Error('Identificadores inválidos');
    }
    if (!Number.isInteger(p.n_parametros) || p.n_parametros < 1 || p.n_parametros > 1000000) {
      throw Error('Cantidad de parámetros inválida');
    }
    if (!Number.isFinite(p.training_time) || p.training_time <= 0) throw Error('Tiempo inválido');
    var a = p.arquitectura;
    if (!a || !Array.isArray(a.filtros) || a.filtros.length < 1 || a.filtros.length > 4 ||
        !a.filtros.every(x => Number.isInteger(x) && x >= 1) ||
        !Number.isInteger(a.kernel_size) || a.kernel_size < 1 || typeof a.usar_batchnorm !== 'boolean' ||
        !Number.isFinite(a.dropout) || a.dropout < 0 || a.dropout > 0.6 ||
        !['max', 'avg'].includes(a.pooling)) throw Error('Arquitectura inválida');
    var keys = ['train_loss', 'val_loss', 'train_acc', 'val_acc'];
    keys.forEach(function(k) {
      if (!Array.isArray(p[k]) || p[k].length !== p.epochs ||
          !p[k].every(x => typeof x === 'number' && Number.isFinite(x) &&
                       x >= 0 && (k.endsWith('acc') ? x <= 1 : x <= 100))) {
        throw Error('Historial inválido: ' + k);
      }
    });
    if (Math.abs(p.best_val_acc - Math.max.apply(null, p.val_acc)) > 1e-8 ||
        Math.abs(p.final_val_acc - p.val_acc[p.epochs - 1]) > 1e-8) throw Error('Resumen inconsistente');
    if (!lock.tryLock(10000)) throw Error('Servidor ocupado; reintentá el envío');
    var sheet = SpreadsheetApp.openById(props.getProperty('SHEET_ID')).getSheetByName('runs');
    if (!sheet) throw Error('Falta la pestaña runs');
    var headers = ['cohorte', 'alumno', 'run_id', 'sesion_id', 'timestamp', 'protocolo',
      'arquitectura', 'n_parametros', 'epochs', 'train_loss', 'val_loss',
      'train_acc', 'val_acc', 'best_val_acc', 'final_val_acc', 'training_time'];
    if (sheet.getLastRow() === 0) sheet.appendRow(headers);
    if (sheet.getLastRow() > 1) {
      var found = sheet.getRange(2, 3, sheet.getLastRow() - 1, 1)
        .createTextFinder(p.run_id).matchEntireCell(true).findNext();
      if (found) return responder({ok: true, run_id: p.run_id, duplicado: true});
    }
    sheet.appendRow([p.cohorte, p.alumno, p.run_id, p.sesion_id, new Date().toISOString(),
      p.protocolo, JSON.stringify(a), p.n_parametros, p.epochs,
      JSON.stringify(p.train_loss), JSON.stringify(p.val_loss),
      JSON.stringify(p.train_acc), JSON.stringify(p.val_acc),
      p.best_val_acc, p.final_val_acc, p.training_time]);
    return responder({ok: true, run_id: p.run_id, duplicado: false});
  } catch (err) {
    return responder({ok: false, error: String(err.message)});
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}
