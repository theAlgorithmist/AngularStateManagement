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
 * Path 2 (lazy-loaded) module
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import { CommonModule } from '@angular/common';
import { NgModule     } from '@angular/core';

import { Path2RoutingModule } from "./path2-routing.module";
import { Path2ModelService } from "./shared/path2-model.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Path2RoutingModule,
  ],
  providers: [Path2ModelService]
})
export class Path2Module { }
