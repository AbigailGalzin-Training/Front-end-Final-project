import { Component } from '@angular/core';
import { Album } from '../../../models/album.model';
import { Artist } from '../../../models/artist.model';

@Component({
    selector: 'app-albums-by-artist',
    templateUrl: './albums-by-artist.component.html',
    styleUrls: ['./albums-by-artist.component.sass'],
})
export class AlbumsByArtistComponent {

    public artist: Artist = {
        id: 1,
        "name": "Artist A",
        "photo": "Photo artist A"
    };
    public albums: Album[] = [
        {
            id: '001',
            title: 'Album A',
            genre: 'Rock',
            releaseDate: '2024-01-23',
            photo: 'https://media.istockphoto.com/id/1491454794/es/foto/letra-a-globo-may%C3%BAsculas-de-aluminio-de-color-dorado-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=WdJpIyrZ5eJPIJjN3FkmtJSq8RKPgMfHaFj5sL7aLWg=',
        },
        {
            id: '002',
            title: 'Album B',
            genre: 'Rap',
            releaseDate: '2022-04-12',
            photo: 'https://cdn.pixabay.com/photo/2023/08/22/10/33/calligraphy-8205971_1280.png',
        },
        {
            id: '003',
            title: 'Album C',
            genre: 'Rock',
            releaseDate: '2020-08-06',
            photo: 'https://media.istockphoto.com/id/1509576974/es/foto/letra-c-hecha-de-%C3%A1baco-sobre-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=TCRlJUgCXIsjj5V_Pr-WKfmYJCnZ0sNiFZso0hknX5M=',
        },
    ];
    
}
