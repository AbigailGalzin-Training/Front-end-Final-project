import { Album } from './album';
import { Artist } from './artist.model';
import { Music } from './music.model';

export interface AppState {
    artists: Artist[];
    albums: Album[];
    music: Music[];
}
