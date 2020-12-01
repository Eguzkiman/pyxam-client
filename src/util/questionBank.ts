export const easyQuestions = [
    `"""
Escribe una función que reciba una letra,
regrese True si la letra es una vocal,
y False si no.

Ejemplo:

es_vocal('k') # regresa False
es_vocal('e') # regresa True
"""
`,
    `"""
Escribe una funcion que reciba una lista.

Debe regresar True si la lista esta vacia,
y False si no.

Ejemplo:

esta_vacia([1,2,3]) # regresa False
esta_vacia([]) # regresa True
"""
`,
]

export const medQuestions = [
    `"""
Escribe una función que reciba un número.

Si el número es multiplo de 3, regresa "Fizz!"
Si el número es multiplo de 5, regresa "Buzz!"
Pero, si el número es multiplo de 3 y de 5, debe regresar "FizzBuzz!"
Si el número no es múltiplo ni de 3 ni de 5, debe regresar el mismo número.

Ejemplo:
fizzbuzz(4) # regresa 4
fizzbuzz(6) # regresa "Fizz!"
fizzbuzz(10) # regresa "Buzz!"
fizzbuzz(15) # regresa "FizzBuzz!"
"""
`,
    `"""
Escribe una función que reciba dos listas.

Debe regresar True si hay al menos un elemento en común en ambas listas.
Debe regresar False si no.

Ejemplo:

tienen_elem_comun([12, 7, 9], [11, 9, 37]) # regresa True
tienen_elem_comun([5, 1, 8], [13, 18, 2]) # regresa False
"""
`,
    `"""
Escribe una función que reciba un número de mes y un número de día.

Debe regresar a qué estación del año pertenece.

Ejemplo:

estacion(12, 31) # regresa "Invierno"
estacion(4, 15) # regresa "Primavera"
estacion(8, 19) # regresa "Verano"
estacion(11, 26) # regresa "Otoño"
"""
`,
    `"""
Escribe una función que reciba un número de mes y un número de día.

Debe regresar a qué signo zodiacal pertenece. Por ejemplo:

signo(3, 7) # regresa "piscis"
signo(10, 15) # regresa "libra"

Puedes ver en qué fechas empiezan y terminan todos los signos aquí:
https://en.wikipedia.org/wiki/Astrological_sign#Dates_table
"""
    `,
    `
"""
Escribe una función que reciba dos listas de números.

La primera lista es de ingresos,
la segunda es de gastos.

Tu función debe regresar el total neto de ganancia (total de ingresos - total de gastos)

Ejemplo:

total([100, 120, 330], [50, 70, 10]) # regresa 420
"""
`,
]

export const hardQuestions = [
    `"""
Escribe una función que reciba un número n.

La función debe imprimir un patrón de 1s y 0s alternándose,
en un cuadrado de n por n.

Ejemplo:

pattern(5)
# Imprime
# 01010
# 10101
# 01010
# 10101
# 01010

pattern(3)
# 010
# 101
# 010
"""
`,
    `"""
Escribe una función reciba un número n.

Tu función debe imprimir el siguiente patrón, por n líneas.

Ejemplo:

pattern(4)
# Imprime
# >
# <<
# >>>
# <<<<

pattern(2)
# Imprime
# >
# <<
"""
`,
    `"""
Escribe una función que reciba dos listas.

Tu función debe regresar una lista, que contenga todos los elementos
que las listas NO tienen en común.

Ejemplo:

diff([1, 2, 3], [2, 3, 4, 5]) # regresa [1, 4, 5]
"""
`,
    `"""
Escribe una funcion que reciba una lista de números.

Tu función debe regresar el segundo número más grande de la lista.

Ejemplo:

segundo_mayor([13, 11, 6, 21]) # regresa 13
segundo_mayor([47, 18, 17, 37]) # regresa 37
"""
    `,
]
