import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './services/login.service';
import {User} from '../../models/user.model';
import {Router} from "@angular/router";

@Component({
  selector: 'ti-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private router: Router, private loginService: LoginService) {
    this.formGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      RePassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  signUp() {
    const user: User = this.formGroup.value;
    this.loginService.signup(user).subscribe(res => {
      this.router.navigate(['main']);
    });
  }
}
