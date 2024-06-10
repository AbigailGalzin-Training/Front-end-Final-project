import { createReducer, on } from "@ngrx/store";
import { add } from "src/actions/music.actions";
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
    },
    {
      id: 4,
      title: "Someone Like You",
      genre: "Pop",
      releaseDate: "2011-01-24",
      artist: 2,
      album: 2,
      duration: 285,
      songPath: "https://example.com/music/someone_like_you.mp3"
    },
    {
      id: 5,
      title: "Everlong",
      genre: "Rock",
      releaseDate: "1997-08-18",
      artist: 3,
      album: 3,
      duration: 250,
      songPath: "https://example.com/music/everlong.mp3"
    },
    {
      id: 6,
      title: "The Pretender",
      genre: "Alternative",
      releaseDate: "2007-08-21",
      artist: 3,
      album: 3,
      duration: 268,
      songPath: "https://example.com/music/the_pretender.mp3"
    },
    {
      id: 7,
      title: "Formation",
      genre: "R&B",
      releaseDate: "2016-02-06",
      artist: 4,
      album: 4,
      duration: 213,
      songPath: "https://example.com/music/formation.mp3"
    },
    {
      id: 8,
      title: "Halo",
      genre: "Pop",
      releaseDate: "2008-01-20",
      artist: 4,
      album: 4,
      duration: 261,
      songPath: "https://example.com/music/halo.mp3"
    },
    {
      id: 9,
      title: "Paranoid Android",
      genre: "Alternative",
      releaseDate: "1997-05-26",
      artist: 5,
      album: 5,
      duration: 386,
      songPath: "https://example.com/music/paranoid_android.mp3"
    },
    {
      id: 10,
      title: "Creep",
      genre: "Rock",
      releaseDate: "1992-09-21",
      artist: 5,
      album: 5,
      duration: 238,
      songPath: "https://example.com/music/creep.mp3"
    }
  ];

export const musicReducer = createReducer(
    initialMusicState,
    on(add, (state, { music }) => [...state, music])
  );