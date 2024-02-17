import { Component, signal } from '@angular/core';

//INTERFACe
import { IKnowLedge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arratyKnowledge = signal<IKnowLedge[]>([
    {
      src: "assets/icons/knowledge/html5.svg",
      alt: "Ícone de conhecimento de HTML5"
    },
    {
      src: "assets/icons/knowledge/css3.svg",
      alt: "Ícone de conhecimento de HTML5"
    },
    {
      src: "assets/icons/knowledge/javascript.svg",
      alt: "Ícone de conhecimento de HTML5"
    },
    {
      src: "assets/icons/knowledge/angular.svg",
      alt: "Ícone de conhecimento de HTML5"
    },
    {
      src: "assets/icons/knowledge/nodejs.svg",
      alt: "Ícone de conhecimento de HTML5"
    }
  ])
}
