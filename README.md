## Gutacion

-   Aplicacion realizada para visualizar y almacenar los datos de humedad en el area rural (Campo)
    Para el control de riego de agua en las parcelas.

-   Es necesario Vicular una base de datos ya sea local o si el usuario lo prefiere un servicio en la nube para el alojamiento de los datos,
    Los datos son recibidos desde un dispositivo de hardware con tensiometros para calcular los valores de humedad
    en centibares (CB) (Placa Arduino)
    
    -Los tensiómetros los podemos representar como una resistencia, puesto que la manera de medir la lectura del sensor es una variación de una resistencia que puede variar entre      500 ohms y 28000 ohms, para poder conocer la humedad necesitamos un dispositivo el cual pueda medir dicha resistencia, por lo cual podemos medir el voltaje en la resistencia      y gracias a un juego de resistencias podemos medir dicha tensión con los pines analógicos de un microcontrolador
