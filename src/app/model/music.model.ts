import { Album } from './album';
import { Artist } from './artist.model';

export interface Music {
    title: string;
    genre: string;
    releaseDate: string;
    duration: number;
    songPath: string;
}
