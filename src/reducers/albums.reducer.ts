import { createReducer, on } from '@ngrx/store';
import { add } from 'src/actions/albums.actions';
import { Album } from 'src/app/model/album';

export const initialAlbumState: Album[] = [
    {
        id: 1,
        title: 'Parachutes',
        genre: 'Rock',
        releaseYear: new Date('2000-07-10'),
        imagePath: 'https://example.com/parachutes.jpg',
        songs: [1, 2],
    },
    {
        id: 2,
        title: '25',
        genre: 'Soul',
        releaseYear: new Date('2015-11-20'),
        imagePath: 'https://example.com/25.jpg',
        songs: [3, 4],
    },
    {
        id: 3,
        title: 'Wasting Light',
        genre: 'Rock',
        releaseYear: new Date('2011-04-12'),
        imagePath: 'https://example.com/wasting_light.jpg',
        songs: [5, 6],
    },
    {
        id: 4,
        title: 'Lemonade',
        genre: 'R&B',
        releaseYear: new Date('2016-04-23'),
        imagePath: 'https://example.com/lemonade.jpg',
        songs: [7, 8],
    },
    {
        id: 5,
        title: 'OK Computer',
        genre: 'Alternative',
        releaseYear: new Date('1997-05-21'),
        imagePath: 'https://example.com/ok_computer.jpg',
        songs: [9, 10],
    },
];

export const albumReducer = createReducer(
    initialAlbumState,
    on(add, (state, { albums }) => [...state, albums])
);
