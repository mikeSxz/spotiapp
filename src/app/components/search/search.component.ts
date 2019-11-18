import { SpotifyService } from "./../../services/spotify.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  buscar(termino: string) {
    this.loading = true;
    this.spotifyService.getArtists(termino).subscribe((data: any) => {
      
      this.artistas = data;
      this.loading = false;
    });
  }
}
