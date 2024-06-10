import { Album } from './album';
import { Artist } from './artist.model';

export interface Music {
    id: number;
    title: string;
    genre: string;
    releaseDate: string;
    artist: number;
    album: number;
    duration: number;
    songPath: string;
}
