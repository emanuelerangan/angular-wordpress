import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import {Lang, NewsSlug} from "./localization";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUrl = 'https://wp.example.com';

  constructor(private http: HttpClient) { }

  getCategoryBySlug(slug: string, lang: Lang): Observable<any> {
    const slugLocal = NewsSlug[lang];
    const url = `${this.blogUrl}/wp-json/wp/v2/categories?slug=${slugLocal}&lang=${lang}`;
    return this.http.get(url)
      .pipe(catchError(this.errorHandler));
  }

  getPostsByCategoryId(id: Number, lang: Lang): Observable<any> {
    const url = `${this.blogUrl}/wp-json/wp/v2/posts?categories=${id}`; // &lang=${lang}
    return this.http.get(url)
      .pipe(catchError(this.errorHandler));
  }

  getPostsByCategorySlug(slug: string, lang: Lang): Observable<any> {
    return this.getCategoryBySlug(slug, lang).pipe(
      switchMap((data: any) => {
        if (data.length && data[0].id) {
          return this.getPostsByCategoryId(data[0].id, lang);
        }
        return of({});
      })
    )
  }

  getSinglePost(slug: any, lang: Lang) {
    let url = `${this.blogUrl}/wp-json/wp/v2/posts?slug=${slug}`;
    // if (lang) {
    //   url += `&lang=${lang}`;
    // }
    return this.http.get(url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error);
    })
  }
}
