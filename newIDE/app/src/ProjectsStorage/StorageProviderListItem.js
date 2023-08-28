// @flow
import * as React from 'react';
import { I18n } from '@lingui/react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AuthenticatedUserContext from '../Profile/AuthenticatedUserContext';
import { Line } from '../UI/Grid'; // Removed Spacer import
import Text from '../UI/Text';
import RaisedButton from '../UI/RaisedButton';
import FlatButton from '../UI/FlatButton';

import { type StorageProvider } from '.';
import { makeStyles } from '@material-ui/styles';
import { t } from '@lingui/macro';

type Props = {|
  storageProvider: StorageProvider,
  onChooseProvider: (storageProvider: StorageProvider) => void,
|};

const useListItemStyles = makeStyles(theme => {
  return {
    root: {
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 8,
    },
  };
});

const StorageProviderListItem = ({
  storageProvider,
  onChooseProvider,
}: Props) => {
  const authenticatedUser = React.useContext(AuthenticatedUserContext);
  const classesForListItem = useListItemStyles();
  const shouldDisplayAuthenticationButtons =
    storageProvider.needUserAuthentication && !authenticatedUser.authenticated;
  const isLineClickable =
    !storageProvider.disabled &&
    (!storageProvider.needUserAuthentication ||
      !shouldDisplayAuthenticationButtons);

      console.log('storageProvider', storageProvider);

      return (
        <I18n>
          {({ i18n }) => (
            <>
              {(storageProvider.internalName && storageProvider.internalName !== null) ? (
                <ListItem
                  classes={classesForListItem}
                  key={storageProvider.internalName}
                  disabled={storageProvider.disabled && !storageProvider.internalName===null}
                  onClick={isLineClickable ? () => onChooseProvider(storageProvider) : null}
                  button={isLineClickable}
                > 
                  <ListItemIcon>
                    {storageProvider.renderIcon ? storageProvider.renderIcon({}) : undefined}
                  </ListItemIcon>
                  <ListItemText>
                    <Line justifyContent="space-between" alignItems="center">
                      <Text noMargin>{i18n._(storageProvider.name)}</Text>
                    </Line>
                  </ListItemText>
                </ListItem>
              ) : null
              }
            </>
          )}
        </I18n>
      );
};

export default StorageProviderListItem;


