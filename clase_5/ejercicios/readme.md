# DATABASE para hacer la competencia CNN

Esta competencia consiste en armar una arquitectura de red neuronal convolucional que aprenda a clasificar las imágenes de MNNIST.
Los archivos que aquí se encuentran son archivos pickle que tienen guardados np.array con las imágenes y los labels del MNIST dataset.
Se armaron 3 sets:
- train
- validation
- test


## Para cargarlos:

```python
import pickle

thing_to_load = pickle.load( open( "file.pkl", "rb" ) )

```
