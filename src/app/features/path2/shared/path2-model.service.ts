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
 * Ultra-light redux-style model (without reducers), built on top of BehaviorSubject
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Subscription
} from 'rxjs';

import {
  IPath2Model,
  INIT_PATH2_MODEL
} from './IPath2Model';

import * as path2Actions from './actions/actions';

@Injectable()
export class Path2ModelService {

  protected subject: BehaviorSubject<IPath2Model>;
  protected model: IPath2Model;

  constructor() {
    this.model   = JSON.parse(JSON.stringify(INIT_PATH2_MODEL));
    this.subject = new BehaviorSubject<IPath2Model>(this.model);
  }

  /**
   * Subscribe to updates from this service
   *
   * @param callback Function that will be called with model updates - accepts {IPath2Model} as an argument
   */
  public subscribe(callback: (model: IPath2Model) => void): Subscription {
    return this.subject.subscribe(callback);
  }

  /**
   * Dispatch an action from this service
   *
   * @param act Action that is dispatched
   *
   * @param payload Arbitrary payload (usually an {object})
   */
  public dispatchAction(act: string, payload: any | null): void {

    this.model.action = act;

    switch (act) {
      case path2Actions.NONE:
        // placeholder for future use
        console.log('no action');
        break;

      case path2Actions.INIT:
        this.model.first = payload.hasOwnProperty('first') ? payload['first'] : this.model.first;
        this.model.last  = payload.hasOwnProperty('last') ? payload['last'] : this.model.first;
        break;

      case path2Actions.INC_PATHA:
        this.model.path2CountA++;
        break;

      case path2Actions.INC_PATHB:
        this.model.path2CountB++;
        break;

      case path2Actions.CLEAR:
        this.model.path2CountA = 0;
        this.model.path2CountB = 0;
        break;
    }

    const dispatchedModel: IPath2Model = JSON.parse(JSON.stringify(this.model));

    this.subject.next(dispatchedModel);
  }
}
