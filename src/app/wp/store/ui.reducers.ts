import {createReducer, on} from '@ngrx/store';
import { UiActions } from "./ui.action-types";

export interface UiState {
  isSideNavOpened: boolean,
  isLoading: boolean,
}

export const InitialUiState = {
  isSideNavOpened: false,
  isLoading: false,
};

export const uiReducer = createReducer(
  InitialUiState,
  on(UiActions.HideSidenav, (state, action) => {
    return {
      ...state,
      isSideNavOpened: false
    };
  }),
  on(UiActions.ShowSidenav, (state, action) => {
    return {
      ...state,
      isSideNavOpened: true
    };
  }),
  on(UiActions.ShowSpinner, (state, action) => {
    return {
      ...state,
      isLoading: true
    };
  }),
  on(UiActions.HideSpinner, (state, action) => {
    return {
      ...state,
      isLoading: false
    };
  }),
);
