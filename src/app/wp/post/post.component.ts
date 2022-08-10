import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAllPosts } from '../blog.actions';
import { Post } from '../blog.interface';
import { selectPublishPosts } from '../blog.selectors';
import {currentLang} from "../store/lang.selectors";
import {AppState} from "../../reducers";

@Component({
  selector: 'hal-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  allPosts$: Observable<Post[]>;
  public errorMessage: any;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    const currentLang$ = this.store.pipe(
      select(currentLang)
    )

    currentLang$.subscribe(currentLang => {
      this.allPosts$ = this.store.pipe(select(state => selectPublishPosts(state)));
      console.log('currentLang listend from store: ', currentLang);
      this.store.dispatch(loadAllPosts({lang: currentLang}));
    })
  }

}
