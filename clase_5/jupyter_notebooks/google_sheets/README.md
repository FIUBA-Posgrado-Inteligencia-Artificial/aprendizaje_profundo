# Google Sheets para el CNN Challenge

Configuración correspondiente a `CNN_ejercicio_docente.ipynb`. El archivo
`Code.gs` es una copia del script incluido en ese notebook, lista para pegar.
La planilla almacena los intentos; el notebook docente muestra el ranking y las curvas.

## 1. Crear la planilla

1. Creá una hoja de cálculo en Google Sheets y poné un nombre, por ejemplo **CNN Challenge**.
2. Renombrá la primera pestaña como **runs**, en minúsculas. Dejala vacía:
   el script agrega los encabezados con el primer envío válido.
3. Copiá el ID de la URL: en `https://docs.google.com/spreadsheets/d/ID_DE_LA_HOJA/edit`,
   es solamente `ID_DE_LA_HOJA`.

No hace falta compartir la planilla con permiso de edición con los alumnos:
los envíos se guardan mediante la aplicación web.

## 2. Configurar Apps Script

1. Desde la planilla, abrí **Extensiones > Apps Script**.
2. Reemplazá el contenido de `Code.gs` por el archivo [Code.gs](Code.gs) de esta carpeta y guardá.
   Copiá solo el código, sin delimitadores Markdown.
3. En **Configuración del proyecto > Propiedades de la secuencia de comandos**, agregá:

   | Propiedad | Valor |
   | --- | --- |
   | `SHEET_ID` | El ID de la planilla, sin la URL completa |
   | `COHORTE_ACTIVA` | Por ejemplo `2026_2` |
   | `TOKEN_CLASE` | Un valor largo y aleatorio que compartirás durante la clase |

No guardes el token en el repositorio ni en celdas del notebook. Para generarlo,
podés ejecutar localmente `python -c "import secrets; print(secrets.token_urlsafe(32))"`
y copiar la salida directamente a la propiedad.

## 3. Publicar el receptor

1. Elegí **Implementar > Nueva implementación** y el tipo **Aplicación web**.
2. Configurá la ejecución **como tu cuenta (propietario)** y el acceso **cualquier persona**.
3. Implementá y completá la autorización con la cuenta que tiene acceso a la planilla.
4. Copiá la URL de la aplicación web que termina en **`/exec`**.

El script recibe solicitudes POST. No ejecutes `doPost` con el botón del editor:
sin una solicitud no existe el argumento `e`. Abrir `/exec` en el navegador tampoco
prueba un envío, porque el script no define `doGet`.

Si tu cuenta institucional no permite acceso a cualquier persona, consultá la
restricción con su administrador: el envío del notebook usa este tipo de acceso.
Si cambiás el código después de publicar, actualizá la implementación a una nueva versión.

## 4. Conectar los notebooks

**Docente:** abrí `CNN_ejercicio_docente.ipynb` en Colab, ejecutá la autenticación
con la cuenta que tiene acceso a la planilla y completá `SHEET_ID = "..."` en la
sección 2. Usá el ID de la planilla, no la URL del Apps Script. Ejecutá el resto
del notebook para abrir el dashboard.

**Alumnos:** en la sección **Envío de resultados** de `CNN_ejercicio.ipynb`,
ingresan la URL `/exec`, el token y la cohorte cuando se les solicitan.
La cohorte debe coincidir exactamente con `COHORTE_ACTIVA`.

## 5. Comprobar antes de la clase

1. Completá una corrida con `EPOCHS = 3` (o cualquier entero positivo) en el notebook del alumno y enviá sus resultados.
2. Verificá que `runs` tenga los encabezados y una fila con ese `run_id`.
3. Repetí el mismo envío: debe responder como duplicado y conservar una sola fila.
4. En el notebook docente, pulsá **Actualizar resultados** y comprobá que aparezca la corrida.

El protocolo esperado es `CIFAR10_CNN_v1`. Cada fila contiene un intento completo;
la arquitectura y los cuatro historiales de la cantidad de épocas declarada en `epochs` se guardan como JSON.
No hacen falta fórmulas ni una pestaña por alumno.

Ante `Token inválido` o `Cohorte inválida`, revisá las propiedades y los valores
ingresados por el alumno. Ante `Falta la pestaña runs`, revisá su nombre exacto.
Si el docente no puede leer la hoja, revisá el ID y la cuenta usada para autenticarse.

Para otra cohorte, cambiá `COHORTE_ACTIVA` y rotá `TOKEN_CLASE`; podés conservar
los intentos anteriores en la misma pestaña. El token compartido sirve para esta
actividad didáctica y no verifica la identidad individual de cada alumno.

## Filtros y épocas configurables

Se permiten filtros enteros positivos, incluidos `[1, 2, 3]`, sin el límite anterior
de 8 a 256 por capa. `kernel_size` puede ser cualquier entero positivo, par o
impar, sin límite superior. Se mantiene el límite de un millón de parámetros y de uno a
cuatro bloques. Configurá `EPOCHS` antes de entrenar; el envío registra la longitud
real del historial. El dashboard acepta corridas de distinta duración y muestra
`epochs`. Para comparar arquitecturas, usá el mismo presupuesto de entrenamiento.

Después de actualizar estos archivos, copiá nuevamente `Code.gs` a Apps Script y
actualizá la implementación existente a una nueva versión. Recargá también las
celdas de lectura y dashboard del notebook docente. Las corridas anteriores de
20 épocas siguen siendo compatibles.
