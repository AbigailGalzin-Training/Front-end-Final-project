import { Artist } from './artist.model';
import { Music } from './music.model';

export interface Album {
    id: number;
    title: string;
    genre: string;
    releaseYear: Date;
    imagePath: string;
    songs: number[];
}
