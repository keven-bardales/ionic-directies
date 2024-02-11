import { Component } from '@angular/core';
import {
  IonApp,
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { ContadorComponent } from './components/contador/contador.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
    IonContent,
    ContadorComponent,
    IonList,
    IonItem,
    CommonModule,
    IonButton,
    IonInput,
    FormsModule,
  ],
})
export class AppComponent {
  names: string[] = ['Perro', 'Gato', 'Elefante', 'León', 'Tigre'];
  phoneNumber: string = '';
  score: number = 75;
  textColor: string = '#2aff2b';
  colorButton: string = 'primary'; // Puedes cambiar este valor según sea necesario

  constructor() {}
}
