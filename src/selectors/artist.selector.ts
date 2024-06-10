import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';

export const selectAppState = createFeatureSelector<AppState>('artist');

export const artists = createSelector(
    selectAppState,
    (state: AppState) => state.artists,
);
