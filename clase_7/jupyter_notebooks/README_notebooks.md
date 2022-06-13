# Guia para correr notebook


Autoencoders:
- El entrenamiento y la evaluación con ejecutan cambiando la variables `TRAIN_SCRATCH` dentro del `main`.
- El entrenamiento, salva el modelo en la ruta marcada por la variable `direccion` 
que deben cargar. Si dejan por defecto `'/content'` guardará el modelo en 
la sesion vigente del Colab (se pierde al salir).
- Una vez entenado el modelo, se puede cambiar `TRAINS_SCRATCH` a `False` y el 
programa cargará el modeo y ejecutará el test.


Word embedding:
- sin particularidades

Categorical embedding:
- Es necesario descargar un dataset e indicar la ruta para que el código lo
pueda leer.
- El data set se descarga del siguiente [link](https://drive.google.com/file/d/1M462qbtnFXMyYvWlpHeYjxsXdQJm9IxJ/view?usp=sharing).
- La fuente del dataset está [aquí](https://archive.ics.uci.edu/ml/datasets/Adult).



Transfer learning:
- Es necesario descargar las imagenes a procesar (hormigas o abejas). Se pueden
hallar en el siguiente [link](https://drive.google.com/drive/folders/1La_-Y6tLcaAn_4zXTkTYxfD1luaTyKkq?usp=sharing).
- También será necesario indicar la ruta que tiene a las carpetas de `test` y `val` 
en la variable `data_dir` al principio del código.



