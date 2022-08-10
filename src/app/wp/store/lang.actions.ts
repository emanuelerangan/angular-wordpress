import { createAction, props } from "@ngrx/store";
import { Lang } from "../localization";

export const langChange = createAction(
  "[Lang change] detect lang change",
  props<{currentLang: Lang}>()
)
