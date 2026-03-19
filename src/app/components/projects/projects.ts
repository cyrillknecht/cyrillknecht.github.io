import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatIconModule, MatButtonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent implements OnInit {
  repos = signal<GithubRepo[]>([]);
  loading = signal(true);
  error = signal(false);

  private readonly LANGUAGE_COLORS: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    Rust: '#dea584',
    Go: '#00ADD8',
    HTML: '#e34c26',
    SCSS: '#c6538c',
    Shell: '#89e051',
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<GithubRepo[]>(
        'https://api.github.com/users/cyrillknecht/repos?sort=updated&per_page=12&type=owner'
      )
      .subscribe({
        next: (repos) => {
          this.repos.set(repos.filter((r) => !r.fork).slice(0, 9));
          this.loading.set(false);
        },
        error: () => {
          this.error.set(true);
          this.loading.set(false);
        }
      });
  }

  langColor(lang: string | null): string {
    return lang ? (this.LANGUAGE_COLORS[lang] ?? '#6366f1') : '#6366f1';
  }

  repoDisplayName(name: string): string {
    return name.replace(/-/g, ' ').replace(/_/g, ' ');
  }
}
