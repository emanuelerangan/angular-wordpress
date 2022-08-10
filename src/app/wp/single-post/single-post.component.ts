import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BlogService } from '../blog.service';
import { Lang } from '../../shared/localization';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { currentLang } from 'src/app/shared/store/lang.selectors';

@Component({
  selector: 'hal-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  slug: string;
  singlePost: any;
  errorMessage: any;
  postLocales: any;
  fallbackLang: Lang;
  postTranslations: any;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    private store: Store<AppState>,
    ) { }

  ngOnInit() {
    this.postTranslations = {};
    this.fallbackLang = Lang.en;
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug') as string;
    // this.getSinglePost(this.translateService.currentLang as Lang);
    // this.bindTranslation();

    const currentLang$ = this.store.pipe(
      select(currentLang)
    )

    currentLang$.subscribe(currentLang => {
      const slug = this.singlePost ? this.singlePost.post_translations_obj[currentLang] : this.slug;
      this.getSinglePost(slug, currentLang);
    })
  }

  getSinglePost(slug: string, lang: Lang) {
    console.log('getSinglePost - lang: ', lang);
    this.blogService.getSinglePost(slug, lang)
      .subscribe(data => {
        this.singlePost = data[0];
        this.postTranslations[lang] = data[0];
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('error: ', error);
      });
  }

  // bindTranslation() {
  //   this.translateService.onLangChange.subscribe((langChange) => {
  //     // check if translation has already been loaded
  //     if (this.postTranslations.hasOwnProperty(langChange.lang) && this.postTranslations[langChange.lang]) {
  //       this.router.navigateByUrl('/news/' + this.postTranslations[langChange.lang].slug);
  //       this.singlePost = this.postTranslations[langChange.lang];
  //     } else if (this.singlePost && this.singlePost.wpml_translations) {

  //       // get post translation from response
  //       const postTranslationMeta = this.singlePost.wpml_translations.filter((wpmlTranslation: any) => {
  //         return wpmlTranslation.locale.indexOf(langChange.lang) !== -1;
  //       })[0];

  //       const postTranslationMetaDefault = this.singlePost.wpml_translations.filter((wpmlTranslation: any) => {
  //         console.log('wpmlTranslation.locale: ', wpmlTranslation.locale);
  //         return wpmlTranslation.locale.indexOf('en') !== -1;
  //       })[0];

  //       console.log('postTranslationMeta: ', postTranslationMeta);
  //       console.log('postTranslationMetaDefault: ', postTranslationMetaDefault);

  //       if (postTranslationMeta && postTranslationMeta.hasOwnProperty('slug') && postTranslationMeta.slug !== '') {
  //         this.slug = postTranslationMeta.slug;
  //         this.router.navigateByUrl('/news/' + this.slug);
  //         this.getSinglePost(langChange.lang as Lang);
  //       } else if (postTranslationMetaDefault && postTranslationMetaDefault.hasOwnProperty('slug') && postTranslationMetaDefault.slug !== '') {
  //         this.slug = postTranslationMetaDefault.slug;
  //         this.router.navigateByUrl('/news/' + this.slug);
  //         this.getSinglePost(this.fallbackLang);
  //       }
  //     }
  //   })
  // }

}
