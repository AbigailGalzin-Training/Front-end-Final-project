import { createReducer, on } from '@ngrx/store';
import { AppState } from '../model/appstate.model';
import {
    addInitialData,
    addArtist,
    addAlbum,
    addSong,
} from './app.action';

export const initialState: AppState = {
    artists: [
        {
            name: 'Coldplay',
            genre: ['Rock', 'Pop', 'Alternative'],
            members: [
                'Chris Martin',
                'Jonny Buckland',
                'Guy Berryman',
                'Will Champion',
            ],
            webSite: 'https://www.coldplay.com',
            imagePath:
                'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/artists/profile/Taylor-Swift-fotor-jpg.jpg',
            albums: [
                {
                    title: 'Parachutes',
                    genre: 'Rock',
                    releaseYear: new Date('2000-07-10'),
                    imagePath: 'https://example.com/parachutes.jpg',
                    songs: [
                        {
                            title: 'Yellow',
                            genre: 'Rock',
                            releaseDate: '2000-06-26',
                            duration: 269,
                            songPath: 'https://example.com/music/yellow.mp3',
                        },
                        {
                            title: 'Shiver',
                            genre: 'Rock',
                            releaseDate: '2000-07-10',
                            duration: 299,
                            songPath: 'https://example.com/music/shiver.mp3',
                        },
                    ],
                },
                {
                    title: 'A Rush of Blood to the Head',
                    genre: 'Alternative',
                    releaseYear: new Date('2002-08-26'),
                    imagePath:
                        'https://example.com/a_rush_of_blood_to_the_head.jpg',
                    songs: [
                        {
                            title: 'The Scientist',
                            genre: 'Alternative',
                            releaseDate: '2002-08-26',
                            duration: 310,
                            songPath:
                                'https://example.com/music/the_scientist.mp3',
                        },
                        {
                            title: 'Clocks',
                            genre: 'Alternative',
                            releaseDate: '2002-08-26',
                            duration: 307,
                            songPath: 'https://example.com/music/clocks.mp3',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Adele',
            genre: ['Soul', 'Pop', 'R&B'],
            members: ['Adele Laurie Blue Adkins'],
            webSite: 'https://www.adele.com',
            imagePath:
                'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1667189514105-Maroon-wa_24c89811.jpeg',
            albums: [
                {
                    title: '19',
                    genre: 'Soul',
                    releaseYear: new Date('2008-01-28'),
                    imagePath: 'https://example.com/19.jpg',
                    songs: [
                        {
                            title: 'Chasing Pavements',
                            genre: 'Soul',
                            releaseDate: '2008-01-28',
                            duration: 225,
                            songPath:
                                'https://example.com/music/chasing_pavements.mp3',
                        },
                        {
                            title: 'Hometown Glory',
                            genre: 'Soul',
                            releaseDate: '2008-01-28',
                            duration: 242,
                            songPath:
                                'https://example.com/music/hometown_glory.mp3',
                        },
                    ],
                },
                {
                    title: '21',
                    genre: 'Pop',
                    releaseYear: new Date('2011-01-24'),
                    imagePath: 'https://example.com/21.jpg',
                    songs: [
                        {
                            title: 'Rolling in the Deep',
                            genre: 'Pop',
                            releaseDate: '2011-01-24',
                            duration: 228,
                            songPath:
                                'https://example.com/music/rolling_in_the_deep.mp3',
                        },
                        {
                            title: 'Someone Like You',
                            genre: 'Pop',
                            releaseDate: '2011-01-24',
                            duration: 285,
                            songPath:
                                'https://example.com/music/someone_like_you.mp3',
                        },
                    ],
                },
            ],
        },
        {
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
            imagePath:
                'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1663268125697-WhatsApp_Image_2022-09-15_at_9.17.40_PM_(2).jpeg',
            albums: [
                {
                    title: 'The Colour and the Shape',
                    genre: 'Rock',
                    releaseYear: new Date('1997-05-20'),
                    imagePath:
                        'https://example.com/the_colour_and_the_shape.jpg',
                    songs: [
                        {
                            title: 'Everlong',
                            genre: 'Rock',
                            releaseDate: '1997-08-18',
                            duration: 250,
                            songPath: 'https://example.com/music/everlong.mp3',
                        },
                        {
                            title: 'My Hero',
                            genre: 'Rock',
                            releaseDate: '1997-05-19',
                            duration: 255,
                            songPath: 'https://example.com/music/my_hero.mp3',
                        },
                    ],
                },
                {
                    title: 'Wasting Light',
                    genre: 'Rock',
                    releaseYear: new Date('2011-04-12'),
                    imagePath: 'https://example.com/wasting_light.jpg',
                    songs: [
                        {
                            title: 'Rope',
                            genre: 'Rock',
                            releaseDate: '2011-02-23',
                            duration: 258,
                            songPath: 'https://example.com/music/rope.mp3',
                        },
                        {
                            title: 'Walk',
                            genre: 'Rock',
                            releaseDate: '2011-04-12',
                            duration: 265,
                            songPath: 'https://example.com/music/walk.mp3',
                        },
                    ],
                },
            ],
        },
        {
            name: 'Beyoncé',
            genre: ['R&B', 'Pop', 'Hip-Hop'],
            members: ['Beyoncé Giselle Knowles-Carter'],
            webSite: 'https://www.beyonce.com',
            // imagePath: 'https://example.com/beyonce.jpg',
            imagePath:
                'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1666955170588-Ariana-Grande-wa_59e11327.jpeg',
            albums: [
                {
                    title: 'Dangerously in Love',
                    genre: 'R&B',
                    releaseYear: new Date('2003-06-20'),
                    imagePath: 'https://example.com/dangerously_in_love.jpg',
                    songs: [
                        {
                            title: 'Crazy in Love',
                            genre: 'R&B',
                            releaseDate: '2003-05-18',
                            duration: 235,
                            songPath:
                                'https://example.com/music/crazy_in_love.mp3',
                        },
                        {
                            title: 'Baby Boy',
                            genre: 'R&B',
                            releaseDate: '2003-08-03',
                            duration: 238,
                            songPath: 'https://example.com/music/baby_boy.mp3',
                        },
                    ],
                },
                {
                    title: 'Lemonade',
                    genre: 'Pop',
                    releaseYear: new Date('2016-04-23'),
                    imagePath: 'https://example.com/lemonade.jpg',
                    songs: [
                        {
                            title: 'Formation',
                            genre: 'R&B',
                            releaseDate: '2016-02-06',
                            duration: 213,
                            songPath: 'https://example.com/music/formation.mp3',
                        },
                        {
                            title: 'Sorry',
                            genre: 'R&B',
                            releaseDate: '2016-04-23',
                            duration: 235,
                            songPath: 'https://example.com/music/sorry.mp3',
                        },
                    ],
                },
            ],
        },
        {
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
            imagePath:
                'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1672929736271-Selena_Gomez.jpg',
            albums: [
                {
                    title: 'OK Computer',
                    genre: 'Alternative',
                    releaseYear: new Date('1997-05-21'),
                    imagePath: 'https://example.com/ok_computer.jpg',
                    songs: [
                        {
                            title: 'Paranoid Android',
                            genre: 'Alternative',
                            releaseDate: '1997-05-26',
                            duration: 386,
                            songPath:
                                'https://example.com/music/paranoid_android.mp3',
                        },
                        {
                            title: 'Karma Police',
                            genre: 'Alternative',
                            releaseDate: '1997-08-25',
                            duration: 263,
                            songPath:
                                'https://example.com/music/karma_police.mp3',
                        },
                    ],
                },
                {
                    title: 'In Rainbows',
                    genre: 'Alternative',
                    releaseYear: new Date('2007-10-10'),
                    imagePath: 'https://example.com/in_rainbows.jpg',
                    songs: [
                        {
                            title: '15 Step',
                            genre: 'Alternative',
                            releaseDate: '2007-10-10',
                            duration: 239,
                            songPath: 'https://example.com/music/15_step.mp3',
                        },
                        {
                            title: 'Nude',
                            genre: 'Alternative',
                            releaseDate: '2007-10-10',
                            duration: 263,
                            songPath: 'https://example.com/music/nude.mp3',
                        },
                    ],
                },
            ],
        },
    ],
};

export const appReducer = createReducer(
    initialState,
    on(addInitialData, (state, { data }) => ({
        ...data,
    })),
    on(addArtist, (state, { artist }) => ({
        ...state,
        artists: [...state.artists, artist],
    })
    ),

    on(addAlbum, (state, { artistName, album }) => {
        const updatedArtists = state.artists.map(artist =>
            artist.name === artistName
                ? { ...artist, albums: [...artist.albums, album] }
                : artist
        );
        return { ...state, artists: updatedArtists };
    }),
    on(addSong, (state, { artistName, albumTitle, song }) => {
        const updatedArtists = state.artists.map(artist =>
            artist.name === artistName
                ? {
                    ...artist,
                    albums: artist.albums.map(album =>
                        album.title === albumTitle
                            ? { ...album, songs: [...album.songs, song] }
                            : album
                    )
                }
                : artist
        );
        return { ...state, artists: updatedArtists };
    })
);
