# Guía de notebooks de autoencoders

## Criterio común

- Todos los notebooks siguen el mismo flujo: preparar datos, definir modelo, entrenar o cargar pesos, evaluar reconstrucción y analizar el espacio latente.
- Cuando aparece `TRAIN_SCRATCH`, `True` entrena desde cero y `False` reutiliza un modelo guardado en `direccion`.
- En local conviene cambiar `direccion` por una carpeta del proyecto. Si queda en `'/content'`, esa ruta solo tiene sentido en Colab.
- Los notebooks quedan autocontenidos y no dependen de servicios externos de tracking.

## Notebooks

- `Autoencoder.ipynb`: notebook de referencia con autoencoder denso, convolucional y sparse.
- `Autoencoder_ejercicio.ipynb`: ejercicio guiado para comparar variantes con espacio latente 2D.
- `Variational_AutoEncoder.ipynb`: variante probabilística con término de regularización KL.
- `../ejercicios/Autoencoder_TP.ipynb`: trabajo práctico orientado a interpretar y recorrer el espacio latente.
