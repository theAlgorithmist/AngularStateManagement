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
 * Routing module for (lazy-loaded) Path 2
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { NgModule     } from '@angular/core';
import { CommonModule } from "@angular/common";

import {
  Routes,
  RouterModule
} from '@angular/router';

import { Path2Component  } from "./components/path2.component";
import { Path2AComponent } from "./components/path2-a.component";
import { Path2BComponent } from "./components/path2-b.component";

const routes: Routes = [
  {
    path     : '',
    pathMatch: 'full',
    component: Path2Component
  },
  {
    path     : 'a',
    component: Path2AComponent
  },
  {
    path     : 'b',
    component: Path2BComponent
  }
];

@NgModule({
  declarations: [
    Path2Component,
    Path2AComponent,
    Path2BComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class Path2RoutingModule { }
