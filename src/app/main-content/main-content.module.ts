import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongsComponent } from './songs/songs.component';
import { ArtistsComponent } from './artists/artists.component';
import { AlbumsComponent } from './albums/albums.component';

@NgModule({
  declarations: [
    LeftSideBarComponent,
    PlaylistComponent,
    SongsComponent,
    ArtistsComponent,
    AlbumsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainContentModule { }
