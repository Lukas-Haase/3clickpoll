import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CreateLivepollComponent } from './components/create-livepoll/create-livepoll.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { HomeComponent } from './components/home/home.component'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { GuardTypePipe } from './pipes/type-guard'

@NgModule( {
  declarations: [
    AppComponent,
    CreateLivepollComponent,
    PageNotFoundComponent,
    HomeComponent,
    GuardTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
