import { createReducer, on } from '@ngrx/store';
import { AppState } from '../model/appstate.model';
import {
    addCurrentSong,
    addInitialData,
    setCurrentArtist,
    addArtist,
    addAlbum,
    addSong,
} from './app.action';

export const initialState: AppState = {
    currentArtist: '',
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
            webSite: 'https:/www.coldplay.com',
            imagePath:
                'https:/img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http:/s3-ap-south-1.amazonaws.com/wynk-music-cms/music/artists/profile/Taylor-Swift-fotor-jpg.jpg',
            albums: [
                {
                    title: 'Parachutes',
                    genre: 'Rock',
                    releaseYear: new Date('2000-07-10'),
                    imagePath: 'https:/i.discogs.com/qX8Ho7VAkk8gW-rKITdc4cGcfaEFR4ouGsQ-aCJ64og/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ4NDAz/MC0xMTY0NzQ3Nzg4/LmpwZWc.jpeg',
                    songs: [
                        {
                            title: 'Yellow',
                            genre: 'Rock',
                            releaseDate: '2000-06-26',
                            duration: 269,
                            songPath: '../../../../assets/yellow.mp3',
                            imagePath: '../../../../assets/music5.png'
                        },
                        {
                            title: 'Shiver',
                            genre: 'Rock',
                            releaseDate: '2000-07-10',
                            duration: 299,
                            songPath: '../../../../assets/as-it-was.mp3',
                            imagePath: '../../../../assets/music4.png'
                        },
                    ],
                },
                {
                    title: 'A Rush of Blood to the Head',
                    genre: 'Alternative',
                    releaseYear: new Date('2002-08-26'),
                    imagePath:
                        'https:/i.discogs.com/jT5gf7YY-y9BNigQcuydGKiQPAHUmVZWVz0_K_4k36k/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyNjY2/ODktMTUyMTkxNjE1/MS02MzU3LmpwZWc.jpeg',
                    songs: [
                        {
                            title: 'The Scientist',
                            genre: 'Alternative',
                            releaseDate: '2002-08-26',
                            duration: 310,
                            songPath:
                                '../../../../assets/bohemian_rhapsody.mp3',
                            imagePath: '../../../../assets/music2.png'
                        },
                        {
                            title: 'Clocks',
                            genre: 'Alternative',
                            releaseDate: '2002-08-26',
                            duration: 307,
                            songPath: '../../../../assets/as-it-was.mp3',
                            imagePath: '../../../../assets/music2.png'
                        },
                    ],
                },
            ],
        },
        {
            name: 'Adele',
            genre: ['Soul', 'Pop', 'R&B'],
            members: ['Adele Laurie Blue Adkins'],
            webSite: 'https:/www.adele.com',
            imagePath:
                'https:/img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http:/s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1667189514105-Maroon-wa_24c89811.jpeg',
            albums: [
                {
                    title: '19',
                    genre: 'Soul',
                    releaseYear: new Date('2008-01-28'),
                    imagePath: 'https:/i.discogs.com/O6yhGT7SMs1k1Aqke-enhPenpXc4e4p9Y3xvkbtLYG0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNjcw/NjAtMTY3NDE1Njg4/Ny0xMjc1LmpwZWc.jpeg',
                    songs: [
                        {
                            title: 'Chasing Pavements',
                            genre: 'Soul',
                            releaseDate: '2008-01-28',
                            duration: 225,
                            songPath:
                                '../../../../assets/as-it-was.mp3',
                            imagePath: '../../../../assets/music4.png'
                        },
                        {
                            title: 'Hometown Glory',
                            genre: 'Soul',
                            releaseDate: '2008-01-28',
                            duration: 242,
                            songPath:
                                '../../../../assets/bohemian_rhapsody.mp3',
                            imagePath: '../../../../assets/music5.png'
                        },
                    ],
                },
                {
                    title: '21',
                    genre: 'Pop',
                    releaseYear: new Date('2011-01-24'),
                    imagePath: 'https:/i.discogs.com/pbgKc7liXRhTdGM1zNhToDidUDYjK7_CQsxNaXxQTtE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NjQ1/ODktMTQ1MjI2OTk5/NS03Mjk4LnBuZw.jpeg',
                    songs: [
                        {
                            title: 'Rolling in the Deep',
                            genre: 'Pop',
                            releaseDate: '2011-01-24',
                            duration: 228,
                            songPath:
                                '../../../../assets/mulan.mp3',
                            imagePath: '../../../../assets/music2.png'
                        },
                        {
                            title: 'Someone Like You',
                            genre: 'Pop',
                            releaseDate: '2011-01-24',
                            duration: 285,
                            songPath:
                                '../../../../assets/as-it-was.mp3',
                            imagePath: '../../../../assets/music5.png'
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
            webSite: 'https:/www.foofighters.com',
            imagePath:
                'https:/img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http:/s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1663268125697-WhatsApp_Image_2022-09-15_at_9.17.40_PM_(2).jpeg',
            albums: [
                {
                    title: 'The Colour and the Shape',
                    genre: 'Rock',
                    releaseYear: new Date('1997-05-20'),
                    imagePath:
                        'https:/i.discogs.com/7Im-I9Ead1iUG9ymf-VZB8qLFPL3hjwPm4HuHGjmSvo/rs:fit/g:sm/q:90/h:600/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyNTAy/NzItMTM4NzM3OTM4/OC0yOTYwLmpwZWc.jpeg',
                    songs: [
                        {
                            title: 'Everlong',
                            genre: 'Rock',
                            releaseDate: '1997-08-18',
                            duration: 250,
                            songPath: '../../../../assets/bohemian_rhapsody.mp3',
                            imagePath: '../../../../assets/music2.png'
                        },
                        {
                            title: 'My Hero',
                            genre: 'Rock',
                            releaseDate: '1997-05-19',
                            duration: 255,
                            songPath: '../../../../assets/mulan.mp3',
                            imagePath: '../../../../assets/music1.png'
                        },
                    ],
                },
                {
                    title: 'Wasting Light',
                    genre: 'Rock',
                    releaseYear: new Date('2011-04-12'),
                    imagePath: 'https:/i.discogs.com/mxA3UE0y8M5vMFnhg9kdl_rwsxtAdtyn9flxP4umecg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4MTc0/MjMtMTMwNDYzNTY1/Mi5qcGVn.jpeg',
                    songs: [
                        {
                            title: 'Rope',
                            genre: 'Rock',
                            releaseDate: '2011-02-23',
                            duration: 258,
                            songPath: '../../../../assets/bohemian_rhapsody.mp3',
                            imagePath: '../../../../assets/music5.png'
                        },
                        {
                            title: 'Walk',
                            genre: 'Rock',
                            releaseDate: '2011-04-12',
                            duration: 265,
                            songPath: '../../../../assets/mulan.mp3',
                            imagePath: '../../../../assets/music4.png'
                        },
                    ],
                },
            ],
        },
        {
            name: 'Beyoncé',
            genre: ['R&B', 'Pop', 'Hip-Hop'],
            members: ['Beyoncé Giselle Knowles-Carter'],
            webSite: 'https:/www.beyonce.com',
            imagePath:
                'https:/img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http:/s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1666955170588-Ariana-Grande-wa_59e11327.jpeg',
            albums: [
                {
                    title: 'Dangerously in Love',
                    genre: 'R&B',
                    releaseYear: new Date('2003-06-20'),
                    imagePath: 'https:/i.discogs.com/92bAvb9f_llRmgThaztmo0cwCumjqXur4kbZzFNzs-0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMwMTcw/OS0xMjY4OTMxMzY4/LmpwZWc.jpeg',
                    songs: [
                        {
                            title: 'Crazy in Love',
                            genre: 'R&B',
                            releaseDate: '2003-05-18',
                            duration: 235,
                            songPath:
                                '../../../../assets/yellow.mp3',
                            imagePath: '../../../../assets/music2.png'
                        },
                        {
                            title: 'Baby Boy',
                            genre: 'R&B',
                            releaseDate: '2003-08-03',
                            duration: 238,
                            songPath: '../../../../assets/scientist.mp3',
                            imagePath: '../../../../assets/music1.png'
                        },
                    ],
                },
                {
                    title: 'Lemonade',
                    genre: 'Pop',
                    releaseYear: new Date('2016-04-23'),
                    imagePath: 'https:/i.discogs.com/ZKlVmncrWPj7inH8QlfToVET7Y3ZNRNV6x979KhFEUM/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg0ODY3/MTQtMTQ3NzU3NTAx/MC02OTY5LmpwZWc.jpeg',
                    songs: [
                        {
                            title: 'Formation',
                            genre: 'R&B',
                            releaseDate: '2016-02-06',
                            duration: 213,
                            songPath: '../../../../assets/yellow.mp3',
                            imagePath: '../../../../assets/music4.png'
                        },
                        {
                            title: 'Sorry',
                            genre: 'R&B',
                            releaseDate: '2016-04-23',
                            duration: 235,
                            songPath: '../../../../assets/scientist.mp3',
                            imagePath: '../../../../assets/music3.png'
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
            webSite: 'https:/www.radiohead.com',
            imagePath:
                'https:/img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http:/s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1672929736271-Selena_Gomez.jpg',
            albums: [
                {
                    title: 'OK Computer',
                    genre: 'Alternative',
                    releaseYear: new Date('1997-05-21'),
                    imagePath: 'https:/i.discogs.com/F_KSyKjGi2YN5SBttMhdgP2zyNdmHv7HHWvDVGj3Shg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTA3/OTgtMTM4ODYyMzYx/MS0yMzYyLmpwZWc.jpeg',
                    songs: [
                        {
                            title: 'Paranoid Android',
                            genre: 'Alternative',
                            releaseDate: '1997-05-26',
                            duration: 386,
                            songPath:
                                '../../../../assets/mulan.mp3',
                            imagePath: '../../../../assets/music2.png'
                        },
                        {
                            title: 'Karma Police',
                            genre: 'Alternative',
                            releaseDate: '1997-08-25',
                            duration: 263,
                            songPath:
                                '../../../../assets/scientist.mp3',
                            imagePath: '../../../../assets/music1.png'
                        },
                    ],
                },
                {
                    title: 'In Rainbows',
                    genre: 'Alternative',
                    releaseYear: new Date('2007-10-10'),
                    imagePath: 'https:/i.discogs.com/7y0jjFTZp88uBO380fsYcO36I3ex_er3lZn8COq90Vc/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzQy/OTYtMTY5NzMyNzQ3/Ny0yMzQ1LmpwZWc.jpeg',
                    songs: [
                        {
                            title: '15 Step',
                            genre: 'Alternative',
                            releaseDate: '2007-10-10',
                            duration: 239,
                            songPath: '../../../../assets/mulan.mp3',
                            imagePath: '../../../../assets/music1.png'
                        },
                        {
                            title: 'Nude',
                            genre: 'Alternative',
                            releaseDate: '2007-10-10',
                            duration: 263,
                            songPath: '../../../../assets/scientist.mp3',
                            imagePath: '../../../../assets/music.png'
                        },
                    ],
                },
            ],
        },
    ],
    currentSong: {
        song: {
            title: 'Nude',
            genre: 'Alternative',
            releaseDate: '2007-10-10',
            duration: 263,
            songPath: '../../../../assets/nude.mp3',
        },
        albumName: 'In Rainbows',
        artistName: 'Radiohead',
    },
};

export const appReducer = createReducer(
    initialState,
    on(addInitialData, (state, { data }) => ({
        ...data,
    })),

    on(addArtist, (state, { artist }) => ({
        ...state,
        artists: [...state.artists, artist],
    })),

    on(addAlbum, (state, { artistName, album }) => ({
        ...state,
        artists: state.artists.map((artist) =>
            artist.name === artistName
                ? { ...artist, albums: [...artist.albums, album] }
                : artist,
        ),
    })),

    on(addSong, (state, { artistName, albumTitle, song }) => ({
        ...state,
        artists: state.artists.map((artist) =>
            artist.name === artistName
                ? {
                      ...artist,
                      albums: artist.albums.map((album) =>
                          album.title === albumTitle
                              ? { ...album, songs: [...album.songs, song] }
                              : album,
                      ),
                  }
                : artist,
        ),
    })),

    on(addCurrentSong, (state, { artistName, albumTitle, song }) => ({
        ...state,
        currentSong: {
            artistName: artistName,
            albumName: albumTitle,
            song: song,
        },
    })),

    on(setCurrentArtist, (state, { artistName }) => {
        return {
            ...state,
            currentArtist: artistName,
        };
    }),
);
