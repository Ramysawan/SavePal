import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { FashionComponent } from './components/fashion/fashion.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'fashion', component: FashionComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ElectronicsComponent,
    FashionComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
