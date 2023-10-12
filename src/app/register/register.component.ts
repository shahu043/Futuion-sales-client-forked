import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { RegisterService } from './register.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  disableSubmitBtn = false;

  registerForm = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    country: ['', [Validators.required]],
    pinCode: ['', [Validators.required]],
  });


  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private registerService: RegisterService) {

  }


  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
      this.disableSubmitBtn = true;
      this.appService.showSpinner();
      this.registerService.registerUser(this.registerForm.value).subscribe((res: any) => {
        this.disableSubmitBtn = false;
        if (res.status == "OK") {
          console.log(res);
          this.registerForm.reset();
          this.appService.successToast('Success', 'User Registered Successfully');
          this.appService.hideSpinner();
          this.appService.navigate("/login");
        } else {
          let msg = res.message ? res.message : 'Something went wrong. Please try again later';
          this.appService.errorToast('Error', msg);
          this.appService.hideSpinner();
        }
      });
      
    }
  }
}
