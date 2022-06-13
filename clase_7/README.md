# Clase 7 - AUTOENCODER - REPRESENTATION LEARNING / EMBEDDINGS - TRANSFER LEARNING

## [Teoria](teoria/clase_7.E2.pptx) (powerpoint):
- Undercomplete / denoising autoencoders.
- Regularized autoencoders.
- Manifold learning.
- Varationals autoencoder.
- [ejemplos de autoencoder](https://github.com/syorami/Autoencoders-Variants) (GitHub externo).
- [ejemplo 1 de V. autoencoder](https://github.com/dragen1860/pytorch-mnist-vae) (GitHub externo).
- [ejemplo 2 de V. autoencoder](https://blog.keras.io/building-autoencoders-in-keras.html) (GitHub externo).
- Representarion learning / Embeddings
- one-hot-encoding vs embeddings.
- word embedding CBOW y Skip-gram.
- [ejemplo categorical embedding](https://gitlab.com/praj88/deepembeddings/-/blob/master/Scripts/deepEmbeddings_Keras.ipynb) (GitLab externo).
- Transfer learning.

## Notebooks:
- [Autoencoder](jupyter_notebooks/Autoencoder.ipynb) (autoencoders con MNIST).
- [Word embedding](jupyter_notebooks/word_embedding.ipynb) (pseudo implementación de word rmbedding)
- [Categorical embedding](jupyter_notebooks/cat_embedding.ipynb) (ejemplo de cat embedding).
- [Transfer learning](jupyter_notebooks/transfer_learning_tutorial.ipynb) (ejemplo de transfer learning).

## Trabajo práctico:
Graficar el espacio latente de 2D de un autoencoder entrenado.
Definir los rangos de `x` e `y` del espacio latente 
 para que se puedan visualizar (aproximadamente) los números del MNIST.
  
- [Autoencoder_TP](jupyter_notebooks/Autoencoder_TP.ipynb)


## Bibliografía:

- deep learning book
https://www.deeplearningbook.org/contents/autoencoders.html
https://www.deeplearningbook.org/contents/representation.html
https://www.deeplearningbook.org/contents/generative_models.html

### links autoencoders:
- https://iq.opengenus.org/types-of-autoencoder/
- https://debuggercafe.com/sparse-autoencoders-using-l1-regularization-with-pytorch/
- https://debuggercafe.com/sparse-autoencoders-using-kl-divergence-with-pytorch/
- https://minimatech.org/autoencoder-with-manifold-learning-for-clustering-in-python/
- https://www.kaggle.com/apapiu/manifold-learning-and-autoencoders
- https://cloud4scieng.org/manifold-learning-and-deep-autoencoders-in-science/
- https://keras.io/examples/generative/vae/

### links representional learning / embeddins
- https://neptune.ai/blog/understanding-representation-learning-with-autoencoder-everything-you-need-to-know-about-representation-and-feature-learning 	
- https://machinelearningmastery.com/use-word-embedding-layers-deep-learning-keras/
- https://towardsdatascience.com/implementing-word2vec-in-pytorch-skip-gram-model-e6bae040d2fb
- https://rakeshchada.github.io/Neural-Embedding-Animation.html
- https://proceedings.neurips.cc/paper/2013/file/9aa42b31882ec039965f3c4923ce901b-Paper.pdf
- https://www.shanelynn.ie/get-busy-with-word-embeddings-introduction/
- http://mccormickml.com/2016/04/19/word2vec-tutorial-the-skip-gram-model/


### links transfer learning
- https://machinelearningmastery.com/transfer-learning-for-deep-learning/
- https://ruder.io/transfer-learning/
