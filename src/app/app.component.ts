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

import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { ModelService } from "./shared/model.service";

import { IAppModel } from "./shared/IAppModel";

import { Subscription } from "rxjs";

import * as appActions from './actions/actions';

/**
 * Main application component
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy
{
  public appModel: IAppModel;                    // Reference to app model for this component

  protected _storeSubscription: Subscription;    // Reference to subscription to model updates

  constructor(protected _modelService: ModelService,
              protected _http: HttpClient)
  {
    this._storeSubscription = this._modelService.subscribe( (m: IAppModel) => this.__onModelUpdated(m));
  }

  public ngOnInit(): void
  {
    // Very simple fetch of some 'client' data
    this._http.get<IAppModel>('/assets/client-data.json').subscribe( (data: IAppModel) => this.__onDataLoaded(data) );
  }

  public ngAfterViewInit(): void
  {
    console.log('After View Init');
  }

  public ngOnDestroy(): void
  {
    this._storeSubscription.unsubscribe();
  }

  /**
   * Execute when initial model data is loaded
   *
   * @param data Model data
   *
   * @private
   */
  protected __onDataLoaded(data: IAppModel): void
  {
    this._modelService.dispatchAction(appActions.USER, data);
  }

  /**
   * Handle app model updates
   *
   * @param model Reference to updated model as a result of some action
   *
   * @private
   */
  protected __onModelUpdated(model: IAppModel): void
  {
    if (model !== undefined && model != null)
    {
      this.appModel = model;
    }
  }
}
