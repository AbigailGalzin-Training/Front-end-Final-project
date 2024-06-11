import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMusicComponent } from './header-music/header-music.component';
import { NavigationMusicComponent } from './navigation-music/navigation-music.component';
import { SideArtistComponent } from './side-artist/side-artist.component';
import { AlbumContentComponent } from './album-content/album-content.component';
import { MainContentComponent } from './main-content.component';
import { CardArtistComponent } from './side-artist/card-artist/card-artist.component';
import { CreateModalComponent } from './navigation-music/create-modal/create-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateAlbumComponent } from './navigation-music/create-album/create-album.component';
import { CreateArtistComponent } from './navigation-music/create-artist/create-artist.component';
import { CreateSongComponent } from './navigation-music/create-song/create-song.component';
import { RouterModule } from '@angular/router';
import { AlbumCardComponent } from './album-content/album-card/album-card.component';
import { AlbumsByArtistComponent } from './album-content/albums-by-artist/albums-by-artist.component';

@NgModule({
    declarations: [
        MainContentComponent,
        HeaderMusicComponent,
        NavigationMusicComponent,
        SideArtistComponent,
        AlbumContentComponent,
        CardArtistComponent,
        CreateModalComponent,
        CreateAlbumComponent,
        CreateArtistComponent,
        CreateSongComponent,
        AlbumCardComponent,
        AlbumsByArtistComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatMenuModule,
        BrowserModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule,
    ],
    exports: [MainContentComponent],
})
export class MainContentModule {}
