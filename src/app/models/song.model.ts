import { Album } from "./album.model";
import { Artist } from "./artist.model";

export interface Song{
    id: number;
    title: string;
    genre: string;
    releaseDate: Date;
    artis: Artist;
    album: Album;
    duration: number;
    mp3Link: string;
}
