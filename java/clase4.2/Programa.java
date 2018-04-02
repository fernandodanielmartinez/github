import java.util.Date;

public class Programa {

    public static void main ( String args[] ) {

        Zoologico zoo = new Zoologico ();

        zoo.abrir();

        Cuidador cuidador = new Cuidador ();

        Date date = new Date();

        cuidador.setNombre("Ernesto");
        cuidador.setFechaDeNacimiento(date);
        System.out.println("Nombre del Cuidador: "+cuidador.getNombre()+", Fecha de Nacimiento del Cuidador: "+cuidador.getFechaDeNacimiento());

        cuidador.setCantidadDeRaciones(125);

        System.out.println("Cantidad de Raciones para los animales: "+cuidador.getCantidadDeRaciones());

        if ( cuidador.getCantidadDeRaciones() == zoo.cantidad_animales * zoo.raciones_por_animal ) {

            System.out.println("Se han alimentado a todos los animales");

        }

        zoo.cerrar();

    }

}
