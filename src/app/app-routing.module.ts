import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreateLivepollComponent } from './components/create-livepoll/create-livepoll.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'create', component: CreateLivepollComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
