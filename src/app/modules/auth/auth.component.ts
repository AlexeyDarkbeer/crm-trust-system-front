import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.authService.setAuthenticated();
    this.router.navigate([''])
  }
}
