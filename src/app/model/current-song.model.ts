import { Song } from './song.model';

export interface CurrentSong {
    song: Song;
    albumName: string;
    artistName: string;
}
