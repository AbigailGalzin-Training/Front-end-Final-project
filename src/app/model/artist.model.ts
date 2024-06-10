import { Music } from './music.model';

export interface Artist {
    id: number;
    name: string;
    genre: string[];
    members: string[];
    webSite: string;
    imagePath: string;
    music: number[];
}
