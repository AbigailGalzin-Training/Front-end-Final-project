import { Injectable } from '@angular/core';
import { Artist } from '../../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  // TODO: until local storage is set
  private artists: Artist[] = [
    { id: 1, name: 'Artist One', photo: 'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/artists/profile/Taylor-Swift-fotor-jpg.jpg' },
    { id: 2, name: 'Artist Two', photo: 'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1667189514105-Maroon-wa_24c89811.jpeg' },
    { id: 3, name: 'Artist Three', photo: 'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1663268125697-WhatsApp_Image_2022-09-15_at_9.17.40_PM_(2).jpeg' },
    { id: 4, name: 'Artist Four', photo: 'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1666955170588-Ariana-Grande-wa_59e11327.jpeg' },
    { id: 5, name: 'Artist Five', photo: 'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1672929736271-Selena_Gomez.jpg' },
  ];

  constructor() { }

  public getArtists(): Artist[] {
    return this.artists;
  }
}
