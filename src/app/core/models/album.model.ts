import { Song } from "./song.model";

export interface Album {
    id: string;
    title: string;
    genre: string;
    releaseDate: string;
    photo: string;
    // songs: Song[];
}
