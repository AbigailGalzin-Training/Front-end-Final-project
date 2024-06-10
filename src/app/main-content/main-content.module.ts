import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMusicComponent } from './header-music/header-music.component';
import { NavigationMusicComponent } from './navigation-music/navigation-music.component';
import { SideArtistComponent } from './side-artist/side-artist.component';
import { AlbumContentComponent } from './album-content/album-content.component';
import { MainContentComponent } from './main-content.component';
import { CardArtistComponent } from './side-artist/card-artist/card-artist.component';
import { CreateModalComponent } from './navigation-music/create-modal/create-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [
        MainContentComponent,
        HeaderMusicComponent,
        NavigationMusicComponent,
        SideArtistComponent,
        AlbumContentComponent,
        CardArtistComponent,
        CreateModalComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [
        MainContentComponent
    ]
})
export class MainContentModule {
}
