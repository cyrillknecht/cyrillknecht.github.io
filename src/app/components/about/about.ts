import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  interests = ['Machine Learning', 'Software Engineering', 'Data Science', 'Computer Vision', 'Automatic Control'];
}
