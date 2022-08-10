import { createEntityAdapter, EntityState } from '@ngrx/entity';
import {createReducer, createSelector, on} from '@ngrx/store';
import {PostActions} from '../action-types';
import { Post } from '../blog.interface';

export interface BlogState extends EntityState<Post> {

}

export const adapter = createEntityAdapter<Post>();

export const InitialBlogState = adapter.getInitialState();

export const blogReducer = createReducer(

  InitialBlogState,
  on(PostActions.allPostLoaded, (state) => adapter.removeAll(state)),
  on(PostActions.allPostLoaded, (state, action) => adapter.addMany(action.posts, state)),
);

export const selectors = adapter.getSelectors();
