from django.shortcuts import render
from .models import RegistroLlamada

def llamada(request):
    return render(request, 'core/llamada.html')

def registro(request):

    if request.POST.get('tipo') == "Local":
        costo = "$"+str(1/10)
    elif request.POST.get('tipo') == "Nacional":
        costo = "$"+str(0.01 * int(request.POST.get('duracion')))
    elif request.POST.get('tipo') == "Internacional":        
        costo = "$"+str(0.03 * int(request.POST.get('duracion')))

    p = RegistroLlamada(duracion=request.POST.get('duracion'), tipo=request.POST.get('tipo'), costo=costo)
    p.save()
    registrollamada = RegistroLlamada.objects.all()
    return render(request, 'core/registro.html', {'registrollamada': registrollamada})



