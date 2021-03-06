import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication.routing';

@NgModule({
	imports: [ CommonModule, AuthenticationRoutingModule, SharedModule, CoreModule ],
	declarations: [ LoginComponent ]
})
export class AuthenticationModule {}
