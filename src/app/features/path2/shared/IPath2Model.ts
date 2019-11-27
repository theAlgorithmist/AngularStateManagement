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
 * Interface and initial path-2 model
 *
 * @author Jim Armstrong (www.algorithmist.net)
 *
 * @version 1.0
 */

import * as path2Actions from './actions/actions';

export interface IPath2Model
{
  action: string;
  first: string;
  last?: string;
  selection: string;
  path2CountA: number,
  path2CountB: number,
};

export const INIT_PATH2_MODEL: IPath2Model = {
  action: path2Actions.NONE,
  first: '',
  selection: '',
  path2CountA: 0,
  path2CountB: 0,
};
