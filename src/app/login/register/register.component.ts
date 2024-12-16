import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/Register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.signupForm = this.fb.group(
      {
        name: ['', Validators.required],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}/
            ),
          ],
        ],
        repeatPassword: ['', Validators.required],
        gender: ['', Validators.required],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern(/^[0-9]{10}$/)],
        ],
        terms: [false, Validators.requiredTrue],
      },
      { validators: this.matchPasswords('password', 'repeatPassword') } // Thêm Custom Validator
    );
  }

  // Custom Validator cho mật khẩu
  private matchPasswords(password: string, repeatPassword: string) {
    return (form: AbstractControl): ValidationErrors | null => {
      const pass = form.get(password)?.value;
      const confirmPass = form.get(repeatPassword)?.value;
      return pass === confirmPass ? null : { passwordsDoNotMatch: true };
    };
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      alert('Vui lòng kiểm tra các trường thông tin và thử lại.');
      return;
    }

    const formData = { ...this.signupForm.value, roles: ['user'] };
    console.log('Dữ liệu màn hình: ', formData);

    this.registerService.SignUp(formData).subscribe(
      (response) => {
        console.log('Response từ Backend: ', response);
        this.router.navigate(['/login']); // Điều hướng khi thành công
      },
      (error) => {
        console.error('Lỗi từ Backend: ', error);
      }
    );
  }

  resetForm() {
    this.signupForm.reset();
  }
}
