// @flow
import { Trans } from '@lingui/macro';
import * as React from 'react';
import Dialog from '../../UI/Dialog';
import FlatButton from '../../UI/FlatButton';
import RaisedButton from '../../UI/RaisedButton';
import { Line } from '../../UI/Grid';
import { ColumnStackLayout } from '../../UI/Layout';
import Window from '../../Utils/Window';
import { openBlobDownloadUrl } from '../../Utils/BlobDownloadUrlHolder';
import Text from '../../UI/Text';
import { showErrorBox } from '../../UI/Messages/MessageBox';
import { serializeToJSObject } from '../../Utils/Serializer';
import {
  archiveFiles,
  type TextFileDescriptor,
} from '../../Utils/BrowserArchiver';
const gd: libGDevelop = global.gd;

const PROJECT_JSON_FILENAME = 'game.json';

type Props = {|
  project: gdProject,
  onDone: () => void,
|};

export default function DownloadFileSaveAsDialog({ project, onDone }: Props) {
  const [zippedProjectBlob, setZippedProjectBlob] = React.useState<?Blob>(null);

  React.useEffect(() => {
    (async () => {
      setZippedProjectBlob(null);
      const newProject = gd.ProjectHelper.createNewGDJSProject();
      try {
        // Make a copy of the project, as it will be updated.
        const serializedProject = new gd.SerializerElement();
        project.serializeTo(serializedProject);
        newProject.unserializeFrom(serializedProject);
        serializedProject.delete();

        // Serialize the project.
        const textFiles: Array<TextFileDescriptor> = [];
        textFiles.push({
          text: JSON.stringify(serializeToJSObject(newProject)),
          filePath: PROJECT_JSON_FILENAME,
        });

        // Archive the whole project.
        const zippedProjectBlob = await archiveFiles({
          textFiles,
          basePath: '/',
          onProgress: (count: number, total: number) => {},
        });
        setZippedProjectBlob(zippedProjectBlob);
      } catch (rawError) {
        showErrorBox({
          message: 'Unable to save your project because of an internal error.',
          rawError,
          errorId: 'download-file-save-as-dialog-error',
        });
        return;
      } finally {
        newProject.delete();
      }
    })();
    return () => setZippedProjectBlob(null);
  }, [project]);

  return (
    <Dialog
      title={<Trans>Download a copy</Trans>}
      actions={[
        <FlatButton
          key="download"
          primary={false}
          onClick={() =>
            openBlobDownloadUrl(zippedProjectBlob, 'gdevelop-game.zip')
          }
          label={<Trans>Download</Trans>}
        />,
        <FlatButton
          key="close"
          label={<Trans>Close</Trans>}
          primary={false}
          onClick={onDone}
        />,
      ]}
      onRequestClose={onDone}
      open
      maxWidth="sm"
    >
      <ColumnStackLayout noMargin>
        <Text>
          <Trans>You can download the file of your game</Trans>
        </Text>
        <Line noMargin expand justifyContent="center">
          {zippedProjectBlob ? (
            <RaisedButton
              primary
              onClick={() =>
                openBlobDownloadUrl(zippedProjectBlob, 'gdevelop-game.zip')
              }
              label={<Trans>Download the compressed game and resources</Trans>}
            />
          ) : null}
        </Line>
      </ColumnStackLayout>
    </Dialog>
  );
}
