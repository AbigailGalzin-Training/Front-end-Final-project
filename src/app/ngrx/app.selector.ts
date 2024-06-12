import { AppState } from 'src/app/model/appstate.model';
import { Artist } from '../model/artist.model';
import { Album } from '../model/album';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrentSong } from '../model/current-song.model';

export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectAllArtists = createSelector(
    selectAppState,
    (state: AppState) => state.artists,
);

export const selectArtist = (artistName: string) =>
    createSelector(selectAppState, (state: AppState) =>
        state.artists.find((artist) => artist.name === artistName),
    );

export const selectAllAlbums = (artistName: string) =>
    createSelector(selectArtist(artistName), (artist: Artist | undefined) =>
        artist ? artist.albums : [],
    );

export const selectAlbum = (artistName: string, albumTitle: string) =>
    createSelector(selectAllAlbums(artistName), (albums: Album[]) =>
        albums ? albums.find((album) => album.title === albumTitle) : undefined,
    );

export const selectAllSongs = (artistName: string, albumTitle: string) =>
    createSelector(
        selectAlbum(artistName, albumTitle),
        (album: Album | undefined) => (album ? album.songs : []),
    );

export const selectSong = (
    artistName: string,
    albumTitle: string,
    songName: string,
) =>
    createSelector(
        selectAlbum(artistName, albumTitle),
        (album: Album | undefined) =>
            album
                ? album.songs.find((song) => song.title === songName)
                : undefined,
    );

export const selectCurrentSongs =
    createSelector(
        selectAppState,
        (state: AppState) => state.currentSong,
    );
