import { ArtistaComponent } from './artista/artista.component';
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export  const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "artist/:id", component: ArtistaComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },

  { path: "**", pathMatch: "full", redirectTo: "home" }
];

