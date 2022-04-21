import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../grpc/user/user.service';

@Component({
  selector: 'efn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.group({
    mobile: ['', [Validators.required, Validators.pattern('\\d{11}')]],
    password: ['', [Validators.required, Validators.pattern('\\S{6,}')]],
  });

  constructor(
    private fb: FormBuilder,
    private user:UserService,
    private router: Router,
  ) { }

  onSubmit() {
    if (this.form.valid) {
      this.user.login(this.form.value).subscribe((token) => {
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
