import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
@Input() text: string;
@Input() color: string;
@Output() btnClick = new EventEmitter()


constructor(){

}
ngOnInit(){}

onClick(){
this.btnClick.emit();
}
}