import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  // Replace with your own Formspree form ID after signing up at formspree.io
  private readonly FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

  formData = { name: '', email: '', message: '' };
  status: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.status = 'sending';
    this.http.post(this.FORMSPREE_URL, this.formData, {
      headers: { Accept: 'application/json' }
    }).subscribe({
      next: () => {
        this.status = 'success';
        form.resetForm();
      },
      error: () => {
        this.status = 'error';
      }
    });
  }
}
