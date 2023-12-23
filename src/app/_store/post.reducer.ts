import { createReducer, on } from '@ngrx/store';
import { setItems, unSetItems } from './post.actions';
import { Posts } from '@app/_models/posts';

export interface PostState {
    posts: Posts; 
}

export const initialState: PostState = {
    posts: {} as Posts,
}

const _postReducer = createReducer(initialState,
    on(setItems, (state, { posts }) => ({ ...state, posts: { ...posts } })),
    on(unSetItems, state => ({ ...state, posts: initialState.posts })),
);

export function postReducer(state:any, action:any) {
    return _postReducer(state, action);
}