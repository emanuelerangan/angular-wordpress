import {createReducer, on} from '@ngrx/store';
import { Lang } from '../localization';
import { langChange } from './lang.actions';


export interface LangState {
  currentLang: Lang
}

export const InitialLangState: LangState = {
  currentLang: Lang.it
}

export const langReducer = createReducer(
  InitialLangState,
  on(langChange, (state, action) => {
    return {
      ...state,
      currentLang: action.currentLang
    };
  })
)
