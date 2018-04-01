#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Ejercicio 1: Crear un bucle que almacene en una variable la suma de todos los elementos numéricos de una lista, a excepción del último.

lista = [1,2,3]
longitud = len(lista) - 1

rango = range(longitud)

suma = 0

for i in rango :
	suma = suma + lista[i]
	
print suma
 
# Ejercicio 2: Utilizando un bucle “while”, elaborar un código que imprima en pantalla cada uno de los elementos de una lista.

lista = [1,2,3]
longitud = len(lista)
count = 0

while count < longitud:
	print lista[count]
	count = count + 1



