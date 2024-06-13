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
import {MatSelectModule} from '@angular/material/select';
import { AlbumCardComponent } from './album-content/album-card/album-card.component';
import { AlbumsByArtistComponent } from './album-content/albums-by-artist/albums-by-artist.component';
import { MusicDisplayerComponent } from './header-music/music-displayer/music-displayer.component';
import { MusicControlComponent } from './header-music/music-control/music-control.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { SongComponentComponent } from './album-content/album-card/song-component/song-component.component'
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
        MusicDisplayerComponent,
        MusicControlComponent,
        SongComponentComponent
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
        MatSelectModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatProgressBarModule,
        MatSliderModule
    ],
    exports: [MainContentComponent],
})
export class MainContentModule { }
