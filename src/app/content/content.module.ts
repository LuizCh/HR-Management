import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content.routing';
import { EmployeesComponent } from './employees/employees.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ContentNavComponent } from './content-nav/content-nav.component';

@NgModule({
	imports: [ CommonModule, ContentRoutingModule, SharedModule ],
	declarations: [ HomeComponent, EmployeesComponent, ProjectsComponent, ContentNavComponent ]
})
export class ContentModule {}
