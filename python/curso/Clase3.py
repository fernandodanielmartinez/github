#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Ejercicio 1
# Crear la clase Calculadora, con los métodos sumar(), restar(), multiplicar() y dividir(). Todos tienen que tomar los argumentos a y b, y retornar el resultado de la 
# operación. En el caso de dividir(), debe lanzar una nueva excepción llamada DivisionPorCero cuando b sea igual a cero.
# Luego, crear una instancia e imprimir en pantalla las cuatro operaciones con números arbitrarios.

import random

class Calculadora (object):
	
	def __init__ (self, a, b):
	
		self.a = a
		self.b = b
		print ""
		print "Valor A: ", a
		print "Valor B: ", b
				
	def sumar (self):
		
		print "Resultado Suma: ", self.a + self.b
		
	def restar (self):

		print "Resultado Resta: ", self.a - self.b

	def multiplicar (self):

		print "Resultado Multiplicacion: ", self.a * self.b

	def dividir (self):

		try:
			print "Resultado Division: ", self.a / self.b
			
		except ZeroDivisionError:
			
			print "Resultado Division: Error. Valor B es 0"
			
objeto1 = Calculadora (random.randint(-100, 100), 0)		
objeto1.sumar()
objeto1.restar()
objeto1.multiplicar()
objeto1.dividir()

objeto2 = Calculadora (random.randint(-100, 100), random.randint(-100, 100))		
objeto2.sumar()
objeto2.restar()
objeto2.multiplicar()
objeto2.dividir()

# Ejercicio 2
# La función raw_input() solicita al usuario que ingrese un dato a través de la consola y lo retorna como una cadena. Por ejemplo:
# edad = raw_input("Ingresa tu edad: ")
# print edad
# Crear un script que solicite al usuario el código de un país e imprima su nombre, de acuerdo con el siguiente diccionario:
# Diccionario código: país.
# paises = {
#    "ar": "Argentina",
#    "es": "España",
#    "us": "Estados Unidos",
#    "fr": "Francia"
# }
# Si el código ingresado no se encuentra en el diccionario, debe imprimir un mensaje en pantalla y volver a preguntar. Si el usuario escribe “salir”, el programa debe 
# terminar.

print ""

paises = { "ar": "Argentina",
           "es": "España",
           "us": "Estados Unidos",
           "fr": "Francia" }
               
objeto3 = raw_input("Ingrese Codigo de Pais: ")

if objeto3 == "salir":
	
	quit()
	
elif paises.get(objeto3, "None") == "None":
	
	print "El codigo ingresado no existe en el diccionario de paises. Por favor, ingresar un valor valido."	
	objeto3 = raw_input("Ingrese Codigo de Pais: ")
	print paises.get(objeto3)		

else: 
	
	print paises.get(objeto3)		
	
		               

