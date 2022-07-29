# DATABASE para hacer la competencia CNN

Esta competencia consiste en armar una arquitectura de red neuronal convolucional que aprenda a clasificar las imágenes de MNNIST.
Los archivos que aquí se encuentran son archivos pickle que tienen guardados np.array con las imágenes y los labels del MNIST dataset.
Se armaron 3 sets:
- train
- validation
- test


Link del colab base con la fórmula a emplear
[aqui](https://colab.research.google.com/drive/1zPpUEha8ds-_t1CkePToJWJHgNPx-Bkx?usp=sharing)
.

## Para cargarlos:

```python
import pickle

thing_to_load = pickle.load( open( "file.pkl", "rb" ) )

```
## Tabla de clasificación:

Los scores alcanzados hasta ahora fueron los siguientes:

![imagen](https://drive.google.com/uc?export=view&id=1mXFuywyBu2TzdkQb-6HDwsPjvyJCGTfO)


