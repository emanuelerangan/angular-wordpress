import { createAction } from "@ngrx/store";

export const HideSidenav = createAction(
  "[Sidenav] Hide Sidenav"
);

export const ShowSidenav = createAction(
  "[Sidenav] Show Sidenav"
);

export const ShowSpinner = createAction(
  "[Loader] Show"
);

export const HideSpinner = createAction(
  "[Loader] Hide"
);
