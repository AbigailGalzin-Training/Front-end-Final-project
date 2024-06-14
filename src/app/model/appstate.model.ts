import { Artist } from './artist.model';
import { CurrentSong } from './current-song.model';

export interface AppState {
    currentArtist: string;
    artists: Artist[];
    currentSong: CurrentSong;
}
