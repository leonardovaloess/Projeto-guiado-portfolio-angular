import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto vida fullstack',
      title: 'Vida fullStack',
      width: '100px',
      height: '51px',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit esse quasi natus expedita ipsum laudantium assumenda sit quam consequuntur itaque.',
      links: [
        {
          name: 'Conheça o blog',
          href: 'http://vidafullstack.com.br',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
