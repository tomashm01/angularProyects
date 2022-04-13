import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss'],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter = new EventEmitter<string>();
  @Output() onDebounce = new EventEmitter<string>();
  @Input() placeholder: string=""

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);
  }
  constructor() {}

  teclaPresionada(e:any) {
    if (e.key === 'Enter') {
      this.buscar();
    }
    this.debouncer.next(this.termino);
  }

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(500)
    )
    .subscribe((valor) => {
      this.onDebounce.emit(valor);
    });
  }
}
