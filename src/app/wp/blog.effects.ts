import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map } from "rxjs/operators";
import { Lang } from "../shared/localization";
import { SharedService } from "../shared/services/shared.service";
import { PostActions } from "./action-types";
import { allPostLoaded } from "./blog.actions";
import { BlogService } from "./blog.service";


@Injectable()
export class BlogEffects {

  constructor(
    private actions$: Actions,
    private blogService: BlogService,
    public sharedService: SharedService
  ) {}

  loadPosts$ = createEffect(
    () => this.actions$.pipe(
      ofType(PostActions.loadAllPosts),
      concatMap(action => {
        return this.blogService.getPostsByCategorySlug('news', action.lang);
      }),
      map(posts => allPostLoaded({posts}))
    )
  )

}
