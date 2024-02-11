import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
  standalone: true,
  imports: [IonButton],
})
export class ContadorComponent implements OnInit {
  contador: number = 0;

  ngOnInit(): void {}

  incrementarContador() {
    this.contador++;
    if (this.contador >= 18) {
      alert('Felicidades, ya eres mayor de edad');
    }
  }
}
