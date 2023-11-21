import { Component } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
    sideBarOpen: boolean = true;

    sideBarToggler(){
        this.sideBarOpen = !this.sideBarOpen;
    }
}
