import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';

export const selectAppState = createFeatureSelector<AppState>('music');

export const selectAllMusic = createSelector(
    selectAppState,
    (state: AppState) => state.music,
);
