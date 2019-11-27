/**
 * Copyright 2019 Jim Armstrong (www.algorithmist.net)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Main application routing module
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

// Main App eagerly-loaded components
import { Path1Component } from "./features/path1/path1-component";
import { Path3Component } from "./features/path3/path3-component";

const routes: Routes = [
  {
    path      : '',
    redirectTo: '/path1',
    pathMatch : 'full',
  },
  {
    path     : 'path1',
    component: Path1Component
  },
  {
    path     : 'path3',
    component: Path3Component
  },
  {
    path        : 'path2',
    loadChildren: () => import('./features/path2/path2.module').then(m => m.Path2Module),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
