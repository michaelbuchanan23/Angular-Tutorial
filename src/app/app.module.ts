import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { ResumeCvComponent } from './resume-cv/resume-cv.component';
import { CvExtendedComponent } from './cv-extended/cv-extended.component';
import { CvAdsComponent } from './cv-ads/cv-ads.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
	declarations: [	AppComponent, UserListComponent, UserDetailComponent, UserEditComponent, UserCreateComponent, ResumeCvComponent, CvExtendedComponent, CvAdsComponent, MenuComponent, MenuItemComponent],
	imports: [ BrowserModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})

export class AppModule { }