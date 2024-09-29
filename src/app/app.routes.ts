import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {MainComponent} from './main/main.component';

export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: MainComponent },
  { path: '', component: MainComponent }
];
