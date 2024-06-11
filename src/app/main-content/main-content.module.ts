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
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
        MatMenuModule,
        BrowserModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MainContentComponent
    ]
})
export class MainContentModule {
}
