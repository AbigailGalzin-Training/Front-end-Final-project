import { createReducer, on } from "@ngrx/store";
import { add, setMusicDisplayer } from "src/actions/music.actions";
import { Music } from "src/app/model/music.model";

export const initialMusicState: Music[] = [
    {
        id: 1,
        title: "Yellow",
        genre: "Rock",
        releaseDate: "2000-06-26",
        artist: 1,
        album: 1,
        duration: 269,
        songPath: "https://example.com/music/yellow.mp3"
    },
    {
        id: 2,
        title: "Fix You",
        genre: "Alternative",
        releaseDate: "2005-09-05",
        artist: 1,
        album: 1,
        duration: 296,
        songPath: "https://example.com/music/fix_you.mp3"
    },
    {
        id: 3,
        title: "Hello",
        genre: "Soul",
        releaseDate: "2015-10-23",
        artist: 2,
        album: 2,
        duration: 295,
        songPath: "https://example.com/music/hello.mp3"
    }
];

export const musicReducer = createReducer(
    initialMusicState,
    on(add, (state, { music }) => [...state, music]),
    on(setMusicDisplayer, (state, { music }) => [music])
);