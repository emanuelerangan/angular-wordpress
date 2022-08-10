import { createAction, props } from "@ngrx/store";
import { Lang } from "../shared/localization";


export const loadAllPosts = createAction(
  "[Posts Load] Load All Posts",
  props<{lang: Lang}>()
);

export const allPostLoaded = createAction(
  "[Loaded Posts Effect] All Posts Loaded",
  props<{posts: any[]}>()
);
