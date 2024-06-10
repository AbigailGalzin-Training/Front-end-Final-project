import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';

export const selectAppState = createFeatureSelector<AppState>('artists');

export const selectAllArtists = createSelector(
    selectAppState,
    (state: AppState) => state.artists,
);
