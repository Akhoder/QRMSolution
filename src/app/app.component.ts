import { LoginService } from './services/login-service.service';
import { User } from './models/User';
import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Angular 4 Demo';
userEmail : string = "";

constructor(private loginService : LoginService) {
loginService.loginSubject.asObservable().subscribe(p =>
{
this.userEmail = localStorage.getItem('loggedUser') || "";
});
}
ngOnInit() {
//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//Add 'implements OnInit' to the class.
this.userEmail = localStorage.getItem('loggedUser') || "";
}
}
