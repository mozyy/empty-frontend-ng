import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../../../proto/user/login/v1/login_pb';
import { UserService } from '../../../grpc/user/user.service';

@Component({
  selector: 'efn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.group({
    mobile: ['18381335182', [Validators.required, Validators.pattern('\\d{11}')]],
    password: ['smqy123', [Validators.required, Validators.pattern('\\S{6,}')]],
  });

  constructor(
    private fb: FormBuilder,
    private user:UserService,
    private router: Router,
  ) { }

  onSubmit() {
    const { valid, value } = this.form;
    if (valid) {
      const req = new LoginRequest();
      req.setMobile(value.mobile || '');
      req.setPassword(value.password || '');
      req.setSmsCode('smscode');
      this.user.login(req).subscribe((token) => {
        if (token) {
          // this.location.back();
          this.router.navigate(['..'], { replaceUrl: true }).then(() => {
            this.router.navigate(['/'], { replaceUrl: true });
          });
          this.form.reset();
        }
      });
    }
  }
}
