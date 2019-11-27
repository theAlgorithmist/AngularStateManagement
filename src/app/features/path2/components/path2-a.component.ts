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
 * Path-2 A component
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

import { IPath2Model       } from "../shared/IPath2Model";
import { Path2ModelService } from "../shared/path2-model.service";

import * as path2Actions from '../shared/actions/actions';

import { Subscription } from "rxjs";

@Component({
  selector: 'app-path2-a',

  template: `<p>- - Path 2 A</p>
    <p *ngIf="path2AModel.path2CountA > 2">Congratulations, {{path2AModel.first}}.  You've visited Path 2 A {{path2AModel.path2CountA}} times!</p>`,

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path2AComponent implements OnInit, OnDestroy
{
  public path2AModel: IPath2Model;              // Reference to path-2 model for this component

  protected _storeSubscription: Subscription;   // Reference to subscription to model updates

  constructor(protected _modelService: Path2ModelService)
  {
    this._storeSubscription = this._modelService.subscribe( (m: IPath2Model) => this.__onModelUpdated(m));
  }

  public ngOnInit(): void
  {
    this._modelService.dispatchAction(path2Actions.INC_PATHA, null);
  }

  public ngOnDestroy(): void
  {
    this._storeSubscription.unsubscribe();
  }

  /**
   * Handle path-2 model updates
   *
   * @param model Reference to updated model as a result of some action
   *
   * @private
   */
  protected __onModelUpdated(model: IPath2Model): void
  {
    if (model !== undefined && model != null) {
      this.path2AModel = model;
    }
  }
}
