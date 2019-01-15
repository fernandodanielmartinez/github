from django.db import models

# Create your models here.

class RegistroLlamada(models.Model):
    duracion = models.PositiveSmallIntegerField()
    tipo = models.CharField(max_length=15)
    costo = models.CharField(max_length=15)

