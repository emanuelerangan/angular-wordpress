// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
// import { select, Store } from "@ngrx/store";
// import { Observable } from "rxjs";
// import { finalize, first, tap } from "rxjs/operators";
// import { AppState } from "../reducers";
// import { currentLang } from "../shared/store/lang.selectors";


// @Injectable()
// export class PostsResolver implements Resolve<any> {

//   loading = false;

//   constructor(private store: Store<AppState>) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
//     return this.store
//       .pipe(
//         tap(() => {
//           // avoiding dispatch action more than one time
//           if (!this.loading) {
//             this.loading = true;

//             const currentLang$ = this.store.pipe(
//               select(currentLang),
//             )

//             // currentLang$.subscribe(currentLang => {
//             //   console.log('currentLang listend from store - resolver: ', currentLang);
//             //   this.store.dispatch(loadAllPosts({lang: currentLang}));
//             // })
//           }
//         }),
//         first(),
//         finalize(() => this.loading = false)
//       )
//   }
// }
