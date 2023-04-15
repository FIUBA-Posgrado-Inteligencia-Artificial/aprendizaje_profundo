# Deep Learning - 2022 - Ejercicios

## Clase 1

1. Resolver el problema de la XOR con 3 neuronas:

    *  Completar las 9 derivadas parciales.
	* Implementar SGD para entrenar el modelo.
	* Graficar MSE por epoch.
    * Una vez entrenado el modelo, realizar predicciones para verificar el funcionamiento.


## Clase 2

1. Resolver el problema de la clase 1 utilizando Mini-Batch con momento de primer orden.
	* Modificar learning rate y cte de primer orden.

## Clase 3



## Clase 4

1. Entrenar modelo clase 3 con embeddings. Comparar métricas con el modelo sin embeddings.
    
## Clase 5

1. Competición de CNN!

    Vamos a armar una pequeña competición en el curso.
    El objetivo es armar una arquitectura de CNN que identifique el dataset MNIST.
    Se van a usar capas de convolución, de activación y de pooling a elección. Cada alumno eligirá su modelo y los respectivos hiperparámetros, lo entrenará y presentará los siguientes resultados:

    *   `test_acc` (del test final)
    *   `n_parameter`
    *   `n_layers` (conv + activacion + pooling = 1 capa)

    El modelo se deberá ajustar a los siguientes puntos:

    *   train: 80%, validation: 10%, test: 10% (los datos serán dados para que todos usan el mismo set para cada grupo. Están en el github el curso).
    *   capa final de salida será una softmax de 10 elementos.
    *   cost_function será `CrossEntropyLoss`.

    El ganador de la competencia será aquel que consiga el mayor `score` empleando la siguiente fórmula:
 


$score = \frac{1}{log_{10}(n\_parameter)}*test\_acc*n\_layers$

 
  Deberan presentar su código colab funcionando y el score alcanzado (con los valores de cada variable que compone el score).
   
   Se armará un ranking con el score alcanzado, la red ganadora se llevará el título del campeon!
    
   Es una competencia fairplay y con fines didácticos, esta formula del ```score``` fué inventada.... no usar como referencia para definir qué modelo utilizar.

   ## Clase 6

   1. Ejercicio para RNN

Empleando el notebook de [predicción de serie temporal](jupyter_notebooks/RNN_signal.ipynb), proponer una arquitectura de RNN que mejore la performance del MLP.
Deberá contar con las siguientes características:

    - Largo de entrada 50 muestras (para pasarle el mismo número de datos que al MLP).
    - Predicción a futuro 10 muestras.
    - Emplear el mismo paquete de datos generados (con la función `generate_time_series`) para
    contar con los exactos mismos datos de entrenamiento, validación y testeo.
Recordar que el MLP está programado para predecir 1 solo valor a futuro y
    ahora deseamos predecir 10 valores a futuro!