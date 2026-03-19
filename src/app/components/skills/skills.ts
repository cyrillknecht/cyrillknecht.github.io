import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  skills: string[];
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
      skills: ['PyTorch / TensorFlow', 'Scikit-learn', 'Computer Vision', 'Probabilistic AI']
    },
    {
      category: 'Software Engineering',
      skills: ['Python', 'FastAPI', 'TypeScript / Angular', 'Java', 'C / C++']
    },
    {
      category: 'Data & Tools',
      skills: ['SQL / Big Data', 'Git / Docker', 'Linux / Bash', 'MATLAB']
    },
    {
      category: 'DevOps & Infrastructure',
      skills: ['Kubernetes', 'OpenShift', 'Tekton', 'ArgoCD']
    }
  ];
}
