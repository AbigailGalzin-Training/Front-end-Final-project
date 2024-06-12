import { Album } from './album';
import { Artist } from './artist.model';

export interface Song {
    title: string;
    genre: string;
    releaseDate: string;
    duration: number;
    songPath: string;
    imagePath?: string;
}
