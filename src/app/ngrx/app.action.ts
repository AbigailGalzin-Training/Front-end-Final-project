import { Artist } from 'src/app/model/artist.model';
import { Album } from '../model/album';
import { AppState } from '../model/appstate.model';
import { createAction, props } from '@ngrx/store';
import { Song } from '../model/song.model';

export const addInitialData = createAction(
    '[App] Add Initial Data',
    props<{ data: AppState }>(),
);

export const addArtist = createAction(
    '[Artist] Add Artist',
    props<{ artist: Artist }>(),
);

export const addArtistSuccess = createAction(
    '[Artist] Add Artist Success',
    props<{ artist: Artist }>(),
);

export const addArtistFailure = createAction(
    '[Artist] Add Artist Failure',
    props<{ error: any }>(),
);

export const addAlbum = createAction(
    '[Album] Add Album',
    props<{ artistName: string; album: Album }>(),
);

export const addAlbumSuccess = createAction(
    '[Album] Add Album Success',
    props<{ artistName: string; album: Album }>()
);

export const addAlbumFailure = createAction(
    '[Album] Add Album Failure',
    props<{ error: any }>()
);

export const addSong = createAction(
    '[Song] Add Song',
    props<{ artistName: string; albumTitle: string; song: Song }>(),
);

export const addSongSuccess = createAction(
    '[Song] Add Song Success',
    props<{ artistName: string; albumTitle: string; song: Song }>()
);

export const addSongFailure = createAction(
    '[Song] Add Song Failure',
    props<{ error: any }>()
);
