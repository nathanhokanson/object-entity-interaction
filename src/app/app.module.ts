import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {Github} from "./github/shared/github";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {About} from './about/about';
import {Home} from './home/home';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {reducer} from "./state/reducer";
import {provideStore} from "@ngrx/store";

@NgModule({
  declarations: [AppComponent, About, RepoBrowser, RepoList, RepoDetail, Home],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [Github, {provide: LocationStrategy, useClass: PathLocationStrategy}, provideStore({reducer})],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
