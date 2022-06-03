# Clase 5 - Recurrent Neural Network

## [Teoria](teoria/RNN.E2.pptx) (powerpoint):
- Red recurrente básica, ecuaciones.
- Unfolding de una RNN.
- RNN en Pytorch y dimensiones.
- Esquemas de arquitecturas típicas.
- Encoder - Decoder
- Attention.
- [Back Propagation Through Time - BPTT](teoria/BPTT_desarrollo.pdf)
- [Presentación con Attention](teoria/cs224n-2021-lecture07-nmt.pdf)
- [Pizarra con anotaciones](teoria/Pizarra_RNN.pdf)

## Notebooks:
- [RNN_teoria](jupyter_notebooks/RNN_teoria.ipynb) (ejercicios de dimensiones en RNN).


## Trabajo práctico:
Generar una arquitectura de RNN que mejore la performance del MLP para predecir 10 valores a futuro de la serie temporal generada.
- [RNN_signal_TP](jupyter_notebooks/RNN_signal_TP.ipynb) (trabajo practico RNN para predecir serie tiemporal sintética).

## Bibliografía:

- deep learning book
https://www.deeplearningbook.org/contents/rnn.html

- BPTT con buena explicación de los vanishing y exploding gradients:
https://mmuratarat.github.io/2019-02-07/bptt-of-rnn

- Demostración de derivada de Loss function w.r.t. softmax:
https://mmuratarat.github.io/2019-02-10/derivative-of-softmax-loss

- Attention mechanism con "animaciones" interesantes:
https://distill.pub/2016/augmented-rnns/

## Implementaciones end-to-end interesantes (usan redes mas avanzadas):

- LSTM sentiment analysis (largo de correr...)
https://github.com/gabrielloye/LSTM_Sentiment-Analysis

- LSTM para estimación de demanda de energía:
https://towardsdatascience.com/building-rnn-lstm-and-gru-for-time-series-using-pytorch-a46e5b094e7b


