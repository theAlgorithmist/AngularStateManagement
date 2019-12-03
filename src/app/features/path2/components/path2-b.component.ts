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
 * Path2-B component
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

// Note that Path2 A and B are almost identical (except for template).  As an exercise, extend both from a common base class
@Component({
  selector: 'app-path2-b',

  template: `<p>- - Path 2 B</p>
  <p *ngIf="path2AModel.path2CountA > 2">Hey, {{path2AModel.first}}.  You've visited Path 2 B {{path2AModel.path2CountA}} times!</p>`,

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Path2BComponent implements OnInit, OnDestroy
{
  public path2AModel: IPath2Model;             // Reference to complete path-2 model for the path-2 route

  protected _storeSubscription: Subscription;  // Reference to subscription to model updates

  constructor(protected _modelService: Path2ModelService)
  {
    this._storeSubscription = this._modelService.subscribe( (m: IPath2Model) => this.__onModelUpdated(m));
  }

  public ngOnInit(): void
  {
    this._modelService.dispatchAction(path2Actions.INC_PATHB, null);
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
    if (model !== undefined && model != null)
    {
      // See Path-1 note about change detection
      this.path2AModel = model;
    }
  }
}
