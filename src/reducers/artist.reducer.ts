import { createReducer, on } from '@ngrx/store';
import { add } from 'src/actions/artist.action';
import { Artist } from 'src/app/model/artist.model';

export const initialArtistState: Artist[] = [
    {
        id: 1,
        name: 'Coldplay',
        genre: ['Rock', 'Pop', 'Alternative'],
        members: [
            'Chris Martin',
            'Jonny Buckland',
            'Guy Berryman',
            'Will Champion',
        ],
        webSite: 'https://www.coldplay.com',
        imagePath: 'https://example.com/coldplay.jpg',
        music: [1, 2],
    },
    {
        id: 2,
        name: 'Adele',
        genre: ['Soul', 'Pop', 'R&B'],
        members: ['Adele Laurie Blue Adkins'],
        webSite: 'https://www.adele.com',
        imagePath: 'https://example.com/adele.jpg',
        music: [3, 4],
    },
    {
        id: 3,
        name: 'Foo Fighters',
        genre: ['Rock', 'Alternative', 'Grunge'],
        members: [
            'Dave Grohl',
            'Nate Mendel',
            'Pat Smear',
            'Taylor Hawkins',
            'Chris Shiflett',
            'Rami Jaffee',
        ],
        webSite: 'https://www.foofighters.com',
        imagePath: 'https://example.com/foo_fighters.jpg',
        music: [5, 6],
    },
    {
        id: 4,
        name: 'Beyoncé',
        genre: ['R&B', 'Pop', 'Hip-Hop'],
        members: ['Beyoncé Giselle Knowles-Carter'],
        webSite: 'https://www.beyonce.com',
        imagePath: 'https://example.com/beyonce.jpg',
        music: [7, 8],
    },
    {
        id: 5,
        name: 'Radiohead',
        genre: ['Alternative', 'Rock', 'Experimental'],
        members: [
            'Thom Yorke',
            'Jonny Greenwood',
            'Colin Greenwood',
            "Ed O'Brien",
            'Philip Selway',
        ],
        webSite: 'https://www.radiohead.com',
        imagePath: 'https://example.com/radiohead.jpg',
        music: [9, 10],
    },
];

export const artistReducer = createReducer(
    initialArtistState,
    on(add, (state, { artists }) => [...state, artists]),
);
