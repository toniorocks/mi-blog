import { ActionReducerMap } from '@ngrx/store';
import { uiReducer, UiState } from './_store/ui.reducer';
import { postReducer, PostState } from './_store/post.reducer';

export interface AppState {
   ui: UiState,
   posts: PostState,
}

export const appReducers: ActionReducerMap<AppState> = {
   ui: uiReducer,
   posts: postReducer,
}