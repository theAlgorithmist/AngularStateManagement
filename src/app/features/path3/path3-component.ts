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
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

import { ModelService } from "../../shared/model.service";

import { IAppModel } from "../../shared/IAppModel";

import { Subscription } from "rxjs";
import * as appActions from "../../actions/actions";

/**
 * (Eager) Path 3 component
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
@Component({
  selector: 'app-path3',

  template: `<p>(Eager) Path 3 Component</p>
  <p>Congratulations {{appModel?.first}}. You've visited {{appModel?.path3Count}} time<span *ngIf="appModel?.path3Count > 1">s</span>!</p>
  <p>Path 3 text, blah, blah ...</p>`,

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path3Component implements OnInit, OnDestroy
{
  public appModel: IAppModel = null;           // Reference to app model for this component

  protected _storeSubscription: Subscription;  // Reference to subscription to model updates

  constructor(protected _modelService: ModelService)
  {
    this._storeSubscription = this._modelService.subscribe( (m: IAppModel) => this.__onModelUpdated(m));
  }

  public ngOnInit(): void
  {
    // For better unit testing, move this logic outside the lifecycle handler.
    this._modelService.dispatchAction(appActions.INC_PATH3, null);
  }

  public ngOnDestroy(): void
  {
    this._storeSubscription.unsubscribe();
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
    if (model !== undefined && model != null) {
      this.appModel = model;
    }
  }
}
