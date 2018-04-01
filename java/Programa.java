public class Programa {

    public static void main (String args[]) {

        Vehiculo vehiculo = new Vehiculo(1,2, 3);

        System.out.println("Alto: "+vehiculo.getAlto()+", Ancho: "+vehiculo.getAncho()+" y Largo: "+vehiculo.getLargo());

        Persona persona = new Persona ("abc", "def", "ghi");

        System.out.println("Nombre: "+persona.getNombre()+", Apellido: "+persona.getApellido()+" y Numero de Documento: "+persona.getNumeroDocumento());

    }

}
