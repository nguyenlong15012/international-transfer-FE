import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
export class UploadComponent {
  selectedFile: File | null = null;
  preview: string | null = null;

  constructor() {}

  // Xử lý file được chọn
  // onFileSelected(event: Event): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files && input.files[0]) {
  //     this.selectedFile = input.files[0];

  //     // Tạo preview ảnh
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.preview = reader.result as string;
  //     };
  //     reader.readAsDataURL(this.selectedFile);
  //   }
  // }

  //gui anh den server
  // onUpload(): void {
  //   if (!this.selectedFile) return;

  //   const formData = new FormData();
  //   formData.append('file', this.selectedFile);

  //   this.http.post('');
  // }
}
