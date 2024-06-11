import { Artist } from 'src/app/model/artist.model';
import { Album } from '../model/album';
import { Music } from '../model/music.model';
import { AppState } from '../model/appstate.model';
import { createAction, props } from '@ngrx/store';

export const addInitialData = createAction(
    '[App] Add Initial Data',
    props<{ data: AppState }>()
);

export const addArtist = createAction(
    '[Artist] Add Artist',
    props<{ artist: Artist }>(),
);
export const addAlbum = createAction(
    '[Album] Add Album',
    props<{ artistName: string; album: Album }>(),
);
export const addSong = createAction(
    '[Song] Add Song',
    props<{ artistName: string; albumTitle: string; song: Music }>(),
);
