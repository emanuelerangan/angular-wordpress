import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UiState } from "./ui.reducers";

export const selectUI = createFeatureSelector<UiState>("ui");

export const isSidenavOpened = createSelector(
  selectUI,
  (state) => state.isSideNavOpened
);

export const isLoading = createSelector(
  selectUI,
  (state) => state.isLoading
);
