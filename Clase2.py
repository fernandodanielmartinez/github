#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Ejercicio 1: 
# En matemática, se conoce a la “sucesión de Fibonacci” como una sucesión infinita de números naturales en la que cada término está determinado por la suma de los dos términos anteriores. Por ejemplo, empezando con el 0 y el 1, los primeros 20 términos son los siguientes:
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181
# A) Crear una función en Python que tome como argumento un entero que indique la cantidad de términos y retorne una lista como la anterior. 
# B) La función debe, además, chequear que el argumento pasado sea mayor a 2. En caso de ser menor, debe mostrar un mensaje en pantalla y no retornar nada.

def fibo (a):

	if a <= 2:
		
		print "El parametro debe ser mayor a 2"
		return
		
	lista = [0,1]
	valor1 = 0
	valor2 = 0
	count = 0

	while count < a:
		
		valor1 = lista[count]  
		count += 1
		valor2 = lista[count]
		lista.append(valor1+valor2)	
				
	print lista

fibo (10)		

# Ejercicio 2
# Escribir una función que, dado un número máximo, retorne una lista con todos los números desde 1 hasta dicho número que sean simultáneamente múltiplos de 3 y de 5 
# (usar la operación resto con el carácter %).

def multiplos (a):
	
	if a < 0:
		
		print "El parametro no debe ser menor a 0"
		return

	lista = []
	count = 0
	
	while count < a:
		
		count += 1

		if count%3 == 0 and count%5 == 0:

			lista.append(count)
				
	print lista
	
multiplos (100)	
	
	
lista = [1,2,3]

def mostrar(*args):
	print ({0}.{1})	
mostrar(lista)	
	
