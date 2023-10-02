import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostComponent } from './post/post.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';


const routes : Routes = [
  {path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: 'post-list', component: PostListComponent },
  { path: 'post-add', component: PostEditComponent },
  {path: 'authentication', component: AuthComponent},
  { path: 'post-edit/:index', component: PostEditComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    PostEditComponent,
    PostComponent,
    AuthComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
