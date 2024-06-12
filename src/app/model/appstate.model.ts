import { Artist } from './artist.model';
import { CurrentSong } from './current-song.model';

export interface AppState {
    artists: Artist[];
    currentSong: CurrentSong;
}
