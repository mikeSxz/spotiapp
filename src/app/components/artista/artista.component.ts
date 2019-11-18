import { SpotifyService } from "./../../services/spotify.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  showLoading: Boolean = true;
  topTracks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.showLoading = true;
    this.route.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
  }

  ngOnInit() {}

  getArtist(id: string) {
    this.showLoading = true;
    this.spotifyService.getArtist(id).subscribe(response => {
      console.log(response);
      this.artista = response;
      this.showLoading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(topTracks => {
      this.topTracks = topTracks;
    });
  }
}
