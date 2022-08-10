import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LangState } from "./lang.reducers";

export const selectLang = createFeatureSelector<LangState>("localization");

export const currentLang = createSelector(
  selectLang,
  (state) => state.currentLang
);
