import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})




export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'lorem ipsum',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ad.',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos nostrum officia recusandae! Nisi tempore illum optio eligendi vero? Explicabo dolor dolores perferendis, obcaecati ex reiciendis in dignissimos accusamus exercitationem!</p>'
    },
    {
      summary: {
        strong: 'lorem ipsum',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ad.',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos nostrum officia recusandae! Nisi tempore illum optio eligendi vero? Explicabo dolor dolores perferendis, obcaecati ex reiciendis in dignissimos accusamus exercitationem!</p>'
    },
    {
      summary: {
        strong: 'lorem ipsum',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ad.',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos nostrum officia recusandae! Nisi tempore illum optio eligendi vero? Explicabo dolor dolores perferendis, obcaecati ex reiciendis in dignissimos accusamus exercitationem!</p>'
    },
    {
      summary: {
        strong: 'lorem ipsum',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ad.',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos nostrum officia recusandae! Nisi tempore illum optio eligendi vero? Explicabo dolor dolores perferendis, obcaecati ex reiciendis in dignissimos accusamus exercitationem!</p>'
    },
    {
      summary: {
        strong: 'lorem ipsum',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ad.',
      },
      text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos nostrum officia recusandae! Nisi tempore illum optio eligendi vero? Explicabo dolor dolores perferendis, obcaecati ex reiciendis in dignissimos accusamus exercitationem!</p>'
    },
  ]);
}
