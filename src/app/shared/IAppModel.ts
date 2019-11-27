import * as appActions from '../actions/actions';

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
 * Interface and initial main application model
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */
export interface IAppModel
{
  action: string;
  first: string;
  last: string;
  role: string;
  path1Count: number,
  path3Count: number,
};

export const INIT_APP_MODEL: IAppModel = {
  action: appActions.NONE,
  first: 'First',
  last: 'Last',
  role: 'None',
  path1Count: 0,
  path3Count: 0
};
