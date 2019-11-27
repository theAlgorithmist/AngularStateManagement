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
 * This is an ultra-light redux-style model (without reducers) for the Maps section of GAT
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
  IAppModel,
  INIT_APP_MODEL
} from './IAppModel';

import * as appActions from '../actions/actions';

@Injectable({providedIn: 'root'})
export class ModelService {

  // broadcast changes to the model to subscribers
  protected subject: BehaviorSubject<IAppModel>;

  // This is the model that is constant for all of Maps
  protected model: IAppModel;

  // TODO add a select method to this class that allows selection of a copy of the model (left as an exercise)
  constructor()
  {
    // model hydration
    this.model   = JSON.parse(JSON.stringify(INIT_APP_MODEL));
    this.subject = new BehaviorSubject<IAppModel>(this.model);
  }

  /**
   * Add a subscriber to model updates
   *
   * @param callback Function to be called whenever model changes; receives a copy of the current model
   *
   * @returns {nothing}
   */
  public subscribe(callback: (model: IAppModel) => void): Subscription {
    return this.subject.subscribe(callback);
  }

  /**
   * Dispatch an action with an optional payload
   *
   * @param act Action to be dispatched
   *
   * @param payload Optional payload of any type, although typically {object}
   */
  public dispatchAction(act: string, payload: any | null): void {

    this.model.action = act;

    switch (act)
    {
      case appActions.NONE:
        // placeholder for future use
        console.log('no action');
        break;

      case appActions.INC_PATH1:
        this.model.path1Count++;
        break;

      case appActions.INC_PATH3:
        this.model.path3Count++;
        break;

      case appActions.CLEAR:
        this.model.path1Count = 0;
        this.model.path3Count = 0;
        break;

      case appActions.USER:
        // todo add data validation as an exercise
        const data: Partial<IAppModel> = payload as Partial<IAppModel>;
        this.model.first = data.first;
        this.model.last  = data.last;
        this.model.role  = data.role;
    }

    const dispatchedModel: IAppModel = JSON.parse(JSON.stringify(this.model));

    this.subject.next(dispatchedModel);
  }
}
