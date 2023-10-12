import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted: boolean = false;

  response: any;

  loginForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private loginService: LoginService,) {
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.appService.showSpinner();
      this.loginService.login(this.loginForm.value).subscribe((res: any) => {
        this.response = res;
        if (res.status == "OK") {
          // this.appService.successToast('Success', res.message);
          this.appService.hideSpinner();
          this.appService.navigate("/home");
        } else {
          this.appService.errorToast('Error', "Invalid username or password");
          this.appService.hideSpinner();
        }
      });
    }
  }



}
