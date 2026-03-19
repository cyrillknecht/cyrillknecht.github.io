import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillGroup {
  category: string;
  icon: string;
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
      icon: '🧠',
      skills: ['PyTorch / TensorFlow', 'Scikit-learn', 'Computer Vision', 'Probabilistic AI'],
    },
    {
      category: 'Software Engineering',
      icon: '⚙️',
      skills: ['Python', 'FastAPI', 'TypeScript / Angular', 'Java', 'C / C++'],
    },
    {
      category: 'Data & Tools',
      icon: '📊',
      skills: ['SQL / Big Data', 'Git / Docker', 'Linux / Bash', 'MATLAB'],
    },
    {
      category: 'DevOps & Infrastructure',
      icon: '☁️',
      skills: ['Kubernetes', 'OpenShift', 'Tekton', 'ArgoCD'],
    },
  ];
}
