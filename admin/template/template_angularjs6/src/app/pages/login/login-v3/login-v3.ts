import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AppComponent }  from '../../../app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
    selector: 'login-v3',
    templateUrl: './login-v3.html'
})



export class LoginV3Page implements OnInit {

  private loginForm: FormGroup;
  private invalidLogin: boolean = false;

  constructor(
    private app: AppComponent, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private loginService: LoginService
  ) {
      app.setPageSettings({
        pageEmpty: true,
        pageBodyWhite: true
      });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        user: ['', Validators.required],
        pass: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  formSubmit(f: NgForm) {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.loginService.login(this.f)) {
        this.router.navigate(['dashboard']);
      } else {
        this.invalidLogin = true;
        return;
      }
    }
  }
}
