import { SpotifyService } from "./../../services/spotify.service";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  showError: boolean = false;
  errorMessage: string = "";

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      },
      errorServicio => {
        this.errorMessage = errorServicio.error.error.message;
        this.showError = true;
        this.loading = false;
      }
    );
  }

  ngOnInit() {}
}
