import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogState, selectors } from "./reducers/blog.reducers";


export const selectBlogState = createFeatureSelector<BlogState>("blog");

export const selectAllPosts = createSelector(
  selectBlogState,
  selectors.selectAll
);

export const selectPublishPosts = createSelector(
  selectAllPosts,
  posts => posts.filter(post => post.status === "publish")
);
