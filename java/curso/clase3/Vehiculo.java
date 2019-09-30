public class Vehiculo {

    private int alto;
    private int ancho;
    private int largo;

    public int getAlto() {
        return alto;
    }

    public void setAlto(int alto) {
        this.alto = alto;
    }

    public int getAncho() {
        return ancho;
    }

    public void setAncho(int ancho) {
        this.ancho = ancho;
    }

    public int getLargo() {
        return largo;
    }

    public void setLargo(int largo) {
        this.largo = largo;
    }

    public Vehiculo (int alto, int ancho, int largo) {

        setAlto(alto);
        setAncho(ancho);
        setLargo(largo);

    }

}
