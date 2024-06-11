import { Artist } from './artist.model';
import { Music } from './music.model';

export interface Album {
    title: string;
    genre: string;
    releaseYear: Date;
    imagePath: string;
    songs: Music[];
}
