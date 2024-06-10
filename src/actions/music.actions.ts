import { createAction, props } from '@ngrx/store';
import { Music } from 'src/app/model/music.model';

export const add = createAction('[Music] Add', props<{ music: Music }>());
export const setMusicDisplayer = createAction('[Music] setMusicDisplayer', props<{ music: Music }>());
