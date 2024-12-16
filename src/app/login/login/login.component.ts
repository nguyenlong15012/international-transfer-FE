import { AuthService } from './../../services/Auth/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/Login/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Sửa lỗi "styleUrl" -> "styleUrls"
})
export class LoginComponent {
  signInForm: FormGroup;
  isLoading = false; // Trạng thái tải
  errorMessage: string | null = null; // Lưu thông báo lỗi

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService, // Bổ sung AuthService
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.signInForm = this.fb.group({
      username: ['', Validators.required],
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
      terms: [false, Validators.requiredTrue],
    });
  }

  // Điều hướng tới màn hình đăng ký
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  // Xử lý đăng nhập
  onSubmit() {
    if (this.signInForm.invalid) {
      this.errorMessage = 'Vui lòng kiểm tra các trường thông tin và thử lại.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null; // Xóa lỗi cũ nếu có

    const formData = { ...this.signInForm.value };
    console.log('Dữ liệu SignIn màn hình: ', formData);

    this.loginService.SignIn(formData).subscribe(
      (response) => {
        console.log('Response từ Back End: ', response);
        this.isLoading = false;

        if (response.token) {
          // Lưu token vào AuthService
          this.authService.login(response.token);

          // Điều hướng tới trang yêu cầu trước đó hoặc trang mặc định
          const returnUrl =
            this.route.snapshot.queryParams['returnUrl'] || '/transfer';
          this.router.navigate([returnUrl]);
        } else {
          this.errorMessage = 'Đăng nhập thất bại. Vui lòng thử lại.';
        }
      },
      (error) => {
        console.error('Lỗi từ Back End: ', error);
        this.isLoading = false;
        this.errorMessage =
          error.error?.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
      }
    );
  }

  // Đặt lại form
  resetForm() {
    this.signInForm.reset();
    this.errorMessage = null;
  }
}
