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
 * (Eager) Path-1 component
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
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

import * as appActions from '../../actions/actions';

@Component({
  selector: 'app-path1',

  template: `<p>(Eager) Path 1 Component</p>
    <p *ngIf="showBadge">Congratulations!!</p>
    <p>This is some text associated with Path 1, blah, blah ...</p>
   `,

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path1Component implements OnInit, OnDestroy
{
  public showBadge: boolean = false;             // true if showing a 'badge' or recognition of some sort

  protected _storeSubscription: Subscription;    // Reference to subscription to app model updates

  constructor(protected _modelService: ModelService)
  {
    this._storeSubscription = this._modelService.subscribe( (m: IAppModel) => this.__onModelUpdated(m));
  }

  public ngOnInit(): void
  {
    // For better unit testing, move this logic outside the lifecycle handler.
    this._modelService.dispatchAction(appActions.INC_PATH1, null);
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
    // Totally arbitrary criteria for a 'badge'; this is the equivalent of a reducer in the Redux ecosystem
    // In this case, the model is open and most reducers are simple, so they are inlined for convenience and
    // performance.  Reduction, however, can only be tested in terms of directly updating the model.
    if (model !== undefined && model != null) {

      // This var is not an Input with OnPush CD - works since only way to update is after clicking a link;
      // inject a ChangeDetectorRef and call detectChanges() in general.
      this.showBadge = model.path1Count > 4;
    }
  }
}
