import java.util.*;

public class Numeros {

    public static void main (String args []) {

        int[] vecNumeros = {11,-22,33,-44,55,-66,77,-88,99};
        int[] vecPositivos;
        int[] vecNegativos;

        vecPositivos = new int[10];
        vecNegativos = new int[10];

        for (int i = 0, p = 0, n = 0, totalPositivos = 0, totalNegativos = 0; i < vecNumeros.length;i++) {

            System.out.println("Numeros: "+vecNumeros[i]+", Posicion: "+i);

            if (vecNumeros[i] > 0) {
                vecPositivos[p] = vecNumeros[i];
                System.out.println("Positivo: "+vecPositivos[p]+", Posicion: "+p);
                totalPositivos += vecPositivos[p];
                System.out.println("Acumulador Positivos: "+totalPositivos);
                p ++;
            } else {
                vecNegativos[n] = vecNumeros[i];
                System.out.println("Negativo: "+vecNegativos[n]+", Posicion: "+n);
                totalNegativos += vecNegativos[n];
                System.out.println("Acumulador Negativos: "+totalNegativos);
                n ++;
            }

            System.out.println("Suma totalPositivos y totalNegativos: "+(totalPositivos+totalNegativos));

        }

    }

}
