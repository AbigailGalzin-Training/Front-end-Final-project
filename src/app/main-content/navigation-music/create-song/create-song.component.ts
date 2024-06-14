import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { SongService } from 'src/app/core/services/song/song.service';
import { Song } from 'src/app/model/song.model';
import { addSong } from 'src/app/ngrx/app.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/appstate.model';
import { Observable, of, switchMap } from 'rxjs';
import { selectAllAlbums, selectAllArtists } from 'src/app/ngrx/app.selector';

@Component({
    selector: 'app-create-song',
    templateUrl: './create-song.component.html',
    styleUrls: ['./create-song.component.sass'],
})
export class CreateSongComponent {
    createForm: FormGroup;
    title!: string;
    artistList$!: Observable<any[]>;
    albums$!: Observable<any[]>;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<CreateModalComponent>,
        private songService: SongService,
        private store: Store<AppState>,
    ) {
        this.createForm = this.fb.group({
            album: ['', Validators.required],
            name: ['', Validators.required],
            title: ['', Validators.required],
            genre: ['', Validators.required],
            releaseDate: ['', Validators.required],
            duration: ['', Validators.required],
            songPath: ['', Validators.required],
        });
        this.artistList$ = this.store.select(selectAllArtists);
        this.albums$ = this.createForm.get('name')!.valueChanges.pipe(
            switchMap((artist) => {
                if (artist) {
                    return this.store.select(selectAllAlbums(artist.name));
                }
                return of([]);
            }),
        );
    }

    ngOnInit() {
        this.artistList$.subscribe((artists) => {
            console.log('Lista de artistas:', artists);
        });
    }

    onSubmit() {
        if (this.createForm.valid) {
            const createdSong = this.createForm.value;
            const {
                artist,
                album,
                title,
                genre,
                releaseDate,
                duration,
                songPath,
            } = createdSong;

            const artistName = createdSong.name.name.toString();
            const albumTitle = createdSong.album.title.toString();
            const song: Song = {
                title,
                genre,
                releaseDate,
                duration,
                songPath,
            };
            this.songService.create(createdSong);
            this.store.dispatch(addSong({ artistName, albumTitle, song }));
            alert(`Song ${createdSong.title} was successfully created.`);
            this.dialogRef.close();
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}
