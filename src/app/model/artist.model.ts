import { Album } from './album';

export interface Artist {
    name: string;
    genre: string[];
    members: string[];
    webSite: string;
    albums: Album[];
    imagePath: string;
}
