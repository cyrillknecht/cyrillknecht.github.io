import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'Machine Learning & AI',
      skills: [
        { name: 'PyTorch / TensorFlow', level: 85 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Computer Vision', level: 80 },
        { name: 'Probabilistic AI', level: 75 },
      ]
    },
    {
      category: 'Software Engineering',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'TypeScript / Angular', level: 80 },
        { name: 'Java', level: 75 },
        { name: 'C / C++', level: 70 },
      ]
    },
    {
      category: 'Data & Tools',
      skills: [
        { name: 'SQL / Big Data', level: 80 },
        { name: 'Git / Docker', level: 85 },
        { name: 'Linux / Bash', level: 78 },
        { name: 'MATLAB', level: 72 },
      ]
    }
  ];
}
