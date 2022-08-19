import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importamos Componentes
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { SectionPostsComponent } from './components/section-posts/section-posts.component';
import { RouterModule } from '@angular/router';
import { MoreAsideComponent } from './components/more-aside/more-aside.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';
import { AnswerBoxComponent } from './components/answer-box/answer-box.component';
import { CardsCategoriesComponent } from './components/cards-categories/cards-categories.component';
import { CommentModelComponent } from './components/comment-model/comment-model.component';
import { AnserBoxModelComponent } from './components/anwser-box-model/answer-box-model.component';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { AlertModelComponent } from './components/alert-model/alert-model.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderTopComponent,
    SectionGenericComponent,
    NewPostComponent,
    SectionPostsComponent,
    MoreAsideComponent,
    CommentsPostComponent,
    AnswerBoxComponent,
    CardsCategoriesComponent,
    CommentModelComponent,
    AnserBoxModelComponent,
    ImgBrokenDirective,
    AlertModelComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    SideBarComponent,
    HeaderTopComponent,
    SectionGenericComponent,
    NewPostComponent,
    SectionPostsComponent,
    MoreAsideComponent,
    CommentsPostComponent,
    AnswerBoxComponent,
    CardsCategoriesComponent,
    CommentModelComponent,
    AnserBoxModelComponent,
    ImgBrokenDirective
  ]
})
export class SharedModule { }
