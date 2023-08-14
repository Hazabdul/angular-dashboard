import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output() OnMenuBtnClick=new EventEmitter

MenubuttonClicked(){

// to occur an user defined event 

this.OnMenuBtnClick.emit()

}
}
