# Ejercicio para RNN



Empleando el notebook de [predicción de serie temporal](jupyter_notebooks/RNN_signal_TP.ipynb), proponer una 
arquitectura de RNN que mejore la performance del MLP.
 Deberá contar con las siguientes características:

- Largo de entrada 50 muestras (para pasarle el mismo número de datos que al MLP).
- Predicción a futuro 10 muestras.
- Emplear el mismo paquete de datos generados (con la función `generate_time_series`) para
contar con los exactos mismos datos de entrenamiento, validación y testeo.
- Recordar que el MLP está programado para predecir 1 solo valor a futuro y
ahora deseamos predecir 10 valores a futuro!

