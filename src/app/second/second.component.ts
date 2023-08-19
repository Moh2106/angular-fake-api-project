import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  @Input()
  message : any = {}

  @Input()
  index : number = -1;

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>()

  ondelete() : void {
    this.delete.emit(this.index)
  }
}
