import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';

export const selectAppState = createFeatureSelector<AppState>('album');

export const albums = createSelector(
    selectAppState,
    (state: AppState) => state.albums,
);
