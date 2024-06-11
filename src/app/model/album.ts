import { Artist } from './artist.model';
import { Song } from './song.model';

export interface Album {
    title: string;
    genre: string;
    releaseYear: Date;
    imagePath: string;
    songs: Song[];
}
