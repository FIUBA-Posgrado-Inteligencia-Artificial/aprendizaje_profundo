# Clase 5 - Convolutional Neural Networks

## [Teoria](teoria/CNN.pptx) (powerpoint):
- Operación de convolución y padding.
- Estructura típica de layer de convolución.
- Sparse interaction y parameter sharing.
- Activation y pooling layer.
- Translational invariance.
- [Back propagation en CNN](<teoria/Backprop CNN.E0.pdf>)

## Notebooks:
- [CNN_teoria](jupyter_notebooks/CNN_teoria.ipynb) (operaciones basica de conv y pooling).
- [CNN_implementacion_wandb](jupyter_notebooks/CNN_implementacion_wandb.ipynb) (ejemplo de red CNN con base MNIST conectado a Weights and Biases).

## Ejercicio práctico:
Explorar los distintos hiperparámetros de una CNN (`kernel size`, `stride`, `padding`, `padding_mode`, `nro_channels`) para el dataset MNIST y evaluar como afectan a la performance el modelo.


## Bibliografía:

- deep learning book
https://www.deeplearningbook.org/contents/convnets.html
- back-propagation
https://jefkine.com/general/2016/09/05/backpropagation-in-convolutional-neural-networks/
- CNN basic quiz
https://iq.opengenus.org/cnn-questions/
 - CNN basic and popular CNN architectures (las arq de las CNN conocinas las van a ver en Vision x comp2)
https://www.analyticsvidhya.com/blog/2018/12/guide-convolutional-neural-network-cnn/
- Algo sobre pooling layer (basico pero de amable lectura)
https://iq.opengenus.org/pooling-layers/
- Guia paso a paso de armado de red en pytorch
https://tomroth.com.au/pytorch-cnn/
- Un thread interesante de equivariance vs invariance
https://datascience.stackexchange.com/questions/16060/what-is-the-difference-between-equivariant-to-translation-and-invariant-to-tr


