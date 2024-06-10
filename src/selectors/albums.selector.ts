import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';

export const selectAppState = createFeatureSelector<AppState>('albums');

export const selectAllAlbums = createSelector(
    selectAppState,
    (state: AppState) => state.albums,
);
