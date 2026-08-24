# Trabajo práctico 01
## Descripción
este codigo corresponde al Trabajo Practico N1 de node.js
contiene dos programas:
    - el primero llamado Ïndex.js" que recibe e imprime el nombre del estudiante, muestra informacion del runtime y  genera e imprime una ficha con informacion de un video juego trabajando con archivos.
    - el segundo llamado "orden-event-loop.js" que recibe tres mensajes donde se permite observar el funcionamiento de setTimeout()
## Cómo ejecutar
para ejecutar el primer programa se debe iniciar una terminal en el archivo de Index.js y escribir el comando "node index.js", se puede pasar un nombre como argumento, pero en caso de no usar un nombre determinado usara Estudiante. 

para ejecutar el segundo programa se utiliza como comando "node orden-event-loop.js" y se imprimira 
    "Estudiante N1
     Estudiante N2
     Estudiante N3"
demostrando que el callback de setTimeout() espera a que termine el codigo principal para poder ejecutarse. 
## Archivo generado
El primer programa genera un archivo llamado "salida" que contiene en su interior un archivo de texto llamado "ficha-Videojuego.txt" que contiene en su interior la ficha con la informacion del videojuego. 
## Conceptos
1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?
   La diferencia entre estas tres cosas está en que JavaScript es un lenguaje de programación, V8 es un motor desarrollado por Google que se encarga de ejecutar código JavaScript y el runtime de Node.js es un entorno que permite ejecutar código realizado con JavaScript fuera del navegador.
2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?
    Gracias al event loop, que es el encargado de organizar la ejecución del programa. Primero se ejecuta el código principal y, si una operación registra una acción para más adelante, se continúa ejecutando el código principal hasta finalizar. Después, el event loop permite ejecutar la acción pendiente.
3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?
    La "I/O bloqueante" hace que el programa espere a que termine una operación de entrada o salida antes de continuar con la siguiente instrucción. En cambio, la "I/O no bloqueante" permite que el programa continúe ejecutando otras tareas mientras se realiza la operación. Cuando esta termina, se puede procesar su resultado.
4. ¿Qué responsabilidades cumplen node y node en index.js?
    node:path se utiliza para trabajar con las rutas de los archivos y carpetas. node:fs se utiliza para trabajar con el sistema de archivos, permitiendo crear la carpeta y generar el archivo de texto donde se guarda la ficha del videojuego.