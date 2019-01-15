from django.urls import path

from . import views

urlpatterns = [
    path('', views.llamada, name='llamada'),
    path('registro/', views.registro, name='registro'),
]