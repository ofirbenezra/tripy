import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "./services/login.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'ti-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private loginService: LoginService) {
    this.formGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])

    });
  }

  ngOnInit() {
  }

  get username() {
    return this.formGroup.get('username');
  }

  get password() {
    return this.formGroup.get('username');
  }

  get email() {
    return this.formGroup.get('username');
  }

  signUp() {
    const user: User = this.formGroup.value;
    this.loginService.signup(user);
  }
}
