import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './blog.effects';
import { blogReducer } from './reducers/blog.reducers';
import { StoreModule } from '@ngrx/store';

export const postsRoutes: Routes = [
  {
    path: '',
    component: PostComponent,
    // resolve: {
    //   posts: PostsResolver
    // }
  },
  {
    path: ':slug',
    component: SinglePostComponent
  }
];

@NgModule({
  declarations: [
    SinglePostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(postsRoutes),
    TranslateModule,
    EffectsModule.forFeature([BlogEffects]),
    StoreModule.forFeature('blog', blogReducer),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BlogService,
    // PostsResolver
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogModule { }
