import { createAction } from '@ngrx/store';
import { Posts } from '@app/_models/posts';

export const unSetItems = createAction('[Posts] Unset Items');
export const setItems = createAction('[Posts] Set Items', (posts:Posts) => ({posts}));