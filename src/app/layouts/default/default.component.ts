import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  sideBarOpen: boolean = true;

  constructor(private authService: AuthService) {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }

  isAuthenticated(): boolean{
    return this.authService.isAuthenticatedUser();
  }
}
