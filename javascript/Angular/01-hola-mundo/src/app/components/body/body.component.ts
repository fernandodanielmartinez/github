import { Component } from '@angular/core';

@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar: true;

    frase: any = {
        autor: 'Fernando',
        mensaje: 'Curso de Angular'
    };

    temas: String[] = ['Objetos', 'Listas', 'Variables'];

}
