import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedText = '';
  private subtitles = [
    'Master\'s Student @ ETH Zurich',
    'Machine Learning Enthusiast',
    'Software Engineer',
    'Data Science Explorer'
  ];
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private type() {
    const current = this.subtitles[this.currentIndex];
    if (!this.isDeleting) {
      this.displayedText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.timer = setTimeout(() => this.type(), 1800);
        return;
      }
    } else {
      this.displayedText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.subtitles.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.isDeleting ? 60 : 100);
  }
}
