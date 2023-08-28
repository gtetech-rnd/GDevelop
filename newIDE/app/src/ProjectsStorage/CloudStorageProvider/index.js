// @flow
import * as React from 'react';
import { t } from '@lingui/macro';
import { type StorageProvider } from '../index';
import {
  generateOnChangeProjectProperty,
  generateOnSaveProject,
  generateOnChooseSaveProjectAsLocation,
  generateOnSaveProjectAs,
  getWriteErrorMessage,
  onRenderNewProjectSaveAsLocationChooser,
  generateOnAutoSaveProject,
} from './CloudProjectWriter';
import {
  type AppArguments,
  POSITIONAL_ARGUMENTS_KEY,
} from '../../Utils/Window';
import { type MessageDescriptor } from '../../Utils/i18n/MessageDescriptor.flow';
import {
  generateOnOpen,
  generateOnEnsureCanAccessResources,
  generateGetAutoSaveCreationDate,
  generateOnGetAutoSave,
} from './CloudProjectOpener';
import Cloud from '../../UI/CustomSvgIcons/Cloud';
import { generateGetResourceActions } from './CloudProjectResourcesHandler';
import { flatMapDeep, isNull } from 'lodash';

// const isURL = (filename: string) => {
//   return (
//     filename.startsWith('http://') ||
//     filename.startsWith('https://') ||
//     filename.startsWith('ftp://') ||
//     filename.startsWith('blob:') ||
//     filename.startsWith('data:')
//   );
// };

export default ({
  internalName: null,
  createOperations: () => ({}),
});
