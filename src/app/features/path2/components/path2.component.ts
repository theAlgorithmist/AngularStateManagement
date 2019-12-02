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
 * Main Path-2 component
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy
} from '@angular/core';

import {
  NavigationExtras,
  Router
} from "@angular/router";

import { Subscription } from "rxjs";

import { IPath2Model } from "../shared/IPath2Model";

import * as path2Actions from '../shared/actions/actions';

import { Path2ModelService } from "../shared/path2-model.service";

@Component({
  selector: 'app-path2',

  // Note there is no router outlet here, so hit the back button after navigating to A or B.  Making these links
  // persistent is left as an exercise to the reader
  template: `<p>(Lazy) Path 2 Component</p>
  <p>&nbsp;<a [routerLink]="'/path2/a'">Path 2a</a> ({{path2Model.path2CountA}}) 
     &nbsp; <a [routerLink]="'/path2/b'">Path 2b</a> ({{path2Model.path2CountB}})</p>`,

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path2Component implements OnDestroy
{
  public path2Model: IPath2Model;               // Reference to a complete (path-2) model for this route

  protected _storeSubscription: Subscription;   // Reference to subscription to path 2 model service for updates

  constructor(
    protected _router: Router,
    protected _modelService: Path2ModelService
  )
  {
    const state: NavigationExtras = this._router.getCurrentNavigation().extras.state;

    // If the path is loaded directly in the url bar, state will not be available (use a route guard in production
    if (state !== undefined) {
      this._modelService.dispatchAction(path2Actions.INIT, {first: state['first']});
    }

    this._storeSubscription = this._modelService.subscribe( (m: IPath2Model) => this.__onModelUpdated(m));
  }

  public ngOnDestroy(): void
  {
    this._storeSubscription.unsubscribe();
  }

  /**
   * Handle updates from the path-2 model service
   *
   * @param model Updated model from some action
   *
   * @private
   */
  protected __onModelUpdated(model: IPath2Model): void
  {
    if (model !== undefined && model != null) {
      this.path2Model = model;
    }

    switch(model.action)
    {
      case path2Actions.INIT:
        // Placeholder in case you want to add something on model init
        console.log('Path 2 Model Init:', this.path2Model);
        break;
    }
  }
}
