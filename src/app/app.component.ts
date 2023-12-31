import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crm-trust-system-front';

  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit(): void {
    // if(!this.authService.isAuthenticatedUser()){
    //   this.router.navigate(['/auth'])
    // }
  }
}
