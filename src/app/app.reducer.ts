import { ActionReducerMap } from '@ngrx/store';
import { uiReducer, State } from './_store/ui.reducer';

export interface AppState {
   ui: State;
}

export const appReducers: ActionReducerMap<AppState> = {
   ui: uiReducer,
}