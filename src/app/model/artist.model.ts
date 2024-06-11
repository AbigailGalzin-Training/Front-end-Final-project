import { Album } from './album';
import { Music } from './music.model';

export interface Artist {
    name: string;
    genre: string[];
    members: string[];
    webSite: string;
    albums: Album[];
    imagePath: string;
}
