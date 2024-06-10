import { createAction, props } from '@ngrx/store';
import { Artist } from 'src/app/model/artist.model';

export const add = createAction('[Artist] Add', props<{ artists: Artist }>());
