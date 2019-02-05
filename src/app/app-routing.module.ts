import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { MsgboardComponent } from './msgboard/msgboard.component';
import { ReadmeComponent } from './readme/readme.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bloglist', component: BloglistComponent },
  { path: 'blogview/:id', component: BlogviewComponent },  
  { path: 'msgboard', component: MsgboardComponent },  
  { path: 'home', component: ReadmeComponent },
  { path: '**', component: BloglistComponent }  
];

@NgModule({

  /* Using useHash strategy to overcome window history issues causing
  refreshing or backing up from another path back into the app to throw
  404 error. */
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
