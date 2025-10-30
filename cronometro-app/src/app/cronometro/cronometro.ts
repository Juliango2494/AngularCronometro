import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cronometro',
  imports: [CommonModule],
  templateUrl: './cronometro.html',
  styleUrl: './cronometro.css',
})
export class Cronometro implements OnDestroy {
  tiempo = 0;
  suscripcion?: Subscription;
  pausado = true;

  cronometro$ = new Observable<number>(observer => {
    let contador = this.tiempo;
    const intervalo = setInterval(() => {
      contador++;
      observer.next(contador);
    }, 1000);

    return () => clearInterval(intervalo);
  });

  iniciar() {
    if (this.pausado) {
      this.pausado = false;
      this.suscripcion = this.cronometro$.subscribe(valor => {
        this.tiempo = valor;
      });
    }
  }

  pausar() {
    this.pausado = true;
    this.suscripcion?.unsubscribe();
  }

  reiniciar() {
    this.pausar();
    this.tiempo = 0;
  }

  ngOnDestroy() {
    this.suscripcion?.unsubscribe();
  }

}
