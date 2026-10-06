# Pesos de los autoencoders unificados

Los notebooks cargan pesos por defecto. Esta carpeta contiene las instrucciones;
**todavía no hay pesos de entrenamientos completos de los modelos nuevos**.

## Notebooks

- [Familia densa](../jupyter_notebooks/Autoencoders_Densos_Unificados.ipynb).
- [Familia CNN](../jupyter_notebooks/Autoencoders_CNN_Unificados.ipynb).

Cada familia compara AE, AE L1, VAE y beta-VAE, con latente de 36 componentes por defecto.
AE y sparse usan instancias independientes de `Autoencoder`; L1 se calcula solo sobre z.
VAE y beta-VAE usan `VariationalAutoencoder` y se distinguen por beta.
Cada clase define sus capas en encoder y decoder y realiza todo el recorrido en forward.

## Preparar los pesos antes de la clase

1. Revisar la configuración, incluyendo `LATENT_DIM`, `L1_WEIGHT` y `BETA`.
2. Establecer `TRAIN_SCRATCH = True` y seleccionar las variantes en `VARIANTS_TO_RUN`.
3. Ejecutar: Adam se crea una vez por modelo, afuera de `train_model`.
4. Cada mejora de validación guarda directamente los pesos. Al terminar, se restauran
   los mejores pesos y se guarda el historial completo en un JSON separado.
5. Volver a `TRAIN_SCRATCH = False` y comprobar la carga y los gráficos antes de la clase.

L1=1 y beta=4 son valores iniciales ilustrativos que requieren los experimentos posteriores.
La división train/valid/test es común; test no selecciona los mejores pesos.

## Archivos por variante

| Variante | Denso | CNN |
|---|---|---|
| AE | `dense_ae.pt` | `cnn_ae.pt` |
| AE L1 | `dense_sparse.pt` | `cnn_sparse.pt` |
| VAE | `dense_vae.pt` | `cnn_vae.pt` |
| beta-VAE | `dense_beta_vae.pt` | `cnn_beta_vae.pt` |

El `.pt` contiene únicamente `model.state_dict()`. El `.json` del mismo nombre contiene
`history` y `best_epoch`, para recuperar las curvas de reconstrucción, penalización y total.
Ambos archivos pueden guardarse en el repositorio. Si falta el JSON, los pesos se cargan
igualmente, pero las curvas de entrenamiento se omiten.

Para cargar, crear el modelo con **la misma arquitectura y dimensión latente**.
Usar los mismos valores de L1 y beta con los que se entrenó para interpretar sus pérdidas.
No se guardan metadatos ni se comprueban automáticamente esos valores. PyTorch detecta
pesos con formas incompatibles, pero no detecta cambios de beta o L1.

Al entrenar otra vez la misma variante se reemplazan sus archivos, incluso si cambia
la dimensión o la regularización. Para conservar varias corridas, usar otra carpeta en
`MODEL_DIR_OVERRIDE`. Los formatos de checkpoints anteriores no se convierten ni cargan
automáticamente; las arquitecturas de los notebooks originales son diferentes.

## Rutas sin Google Drive

- **Local:** `clase_7/modelos/`, calculada a partir de la ubicación del repositorio.
- **Colab:** `/content/modelos_clase_7/`. Si se clonó el repositorio, los pesos y el historial
  que falten se copian desde `clase_7/modelos/` al almacenamiento de la sesión.
- **Notebook abierto desde GitHub:** eso no clona el repositorio ni descarga sus pesos.
  Subir los `.pt` y `.json` al panel Archivos o clonar el repositorio previamente.
- **Entrenamiento en Colab:** descargar los `.pt` y `.json` y agregarlos a esta carpeta
  antes de cerrar la sesión; `/content` es temporal.

Se puede configurar `MODEL_DIR_OVERRIDE` y, si hace falta, `REPO_DIR_OVERRIDE`.
Si faltan pesos, se omiten esas variantes y se avisa sin iniciar entrenamiento automáticamente.
