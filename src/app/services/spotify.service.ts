import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private httpClient: HttpClient) {
    console.log("Spotify service listo");
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQDXFJb2ms0E__1Ek6y-0Gr7xltXc1maSI8YWHi7oQ8hoIVbRLCPvqOFYnBV2OLxVWnlKkgfhpQPDFua_K"
    });

    return this.httpClient.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases").pipe(
      map(data => {
        return data["albums"].items;
      })
    );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`).pipe(
      map(data => {
        return data["artists"].items;
      })
    );
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`).pipe(
      map(data => {
        return data;
      })
    );
  }

  getTopTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(
      map(data => {
        return data['tracks'];
      })
    );
  }
}
