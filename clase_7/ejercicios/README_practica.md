# Ejercicio para Autoencoder




Analizando lo procesado anteriormente y prestando atención a la 
representación del `latent_space` de batch de TEST ploteado al 
momento de analizar el encoder, realice un paneo en X e Y del
`latent_space` y grafique el resultado que genera el decoder 
para cada número generado.

Para realizar esto, se deja armada la siguiente celda donde 
solamente debe fijar los siguientes hiper-parámetros:
- `n` número de imágenes (digits del NMIST) a representar.
- `x_min` valor mínimo de la variable x del `latent_space`.
- `x_max` valor mínimo de la variable x del `latent_space`.
- `y_min` valor mínimo de la variable x del `latent_space`.
- `y_max` valor mínimo de la variable x del `latent_space`.


¿Cómo afecta los límites de x e y del `latent_space` con la 
última función de activación del encoder? 
analice el comportamiento modificando dicha función y explique 
con sus palabras lo que sucede.

