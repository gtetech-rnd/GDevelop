// @flow
import * as React from 'react';
import { type Profile } from '../Utils/GDevelopServices/Authentication';
import { type CloudProjectWithUserAccessInfo } from '../Utils/GDevelopServices/Project';
import { type Badge } from '../Utils/GDevelopServices/Badge';
import {
  type Limits,
  type Usages,
  type Subscription,
} from '../Utils/GDevelopServices/Usage';
import {
  type AssetShortHeader,
  type PrivateAssetPack,
} from '../Utils/GDevelopServices/Asset';

export type AuthenticatedUser = {|
  authenticated: boolean,
  profile: ?Profile,
  badges: ?Array<Badge>,
  cloudProjects: ?Array<CloudProjectWithUserAccessInfo>,
  cloudProjectsFetchingErrorLabel: ?React.Node,
  receivedAssetPacks: ?Array<PrivateAssetPack>,
  receivedAssetShortHeaders: ?Array<AssetShortHeader>,
  limits: ?Limits,
  usages: ?Usages,
  subscription: ?Subscription,
  onLogout: () => Promise<void>,
  onEdit: () => void,
  onBadgesChanged: () => Promise<void>,
  onCloudProjectsChanged: () => Promise<void>,
  onRefreshUserProfile: () => Promise<void>,
  onSubscriptionUpdated: () => Promise<void>,
  onPurchaseSuccessful: () => Promise<void>,
|};

export const initialAuthenticatedUser = {
  authenticated: false,
  profile: null,
  badges: null,
  cloudProjects: null,
  cloudProjectsFetchingErrorLabel: null,
  receivedAssetPacks: null,
  receivedAssetShortHeaders: null,
  subscription: null,
  usages: null,
  limits: null,
  onLogout: async () => {},
  onEdit: () => {},
  onBadgesChanged: async () => {},
  onCloudProjectsChanged: async () => {},
  onRefreshUserProfile: async () => {},
  onSubscriptionUpdated: async () => {},
  onPurchaseSuccessful: async () => {},
};

export const authenticatedUserLoggedOutAttributes = {
  authenticated: false,
  profile: null,
  cloudProjects: [],
  cloudProjectsFetchingErrorLabel: null,
  receivedAssetPacks: [],
  receivedAssetShortHeaders: [],
  subscription: null,
  usages: null,
  limits: null,
};

const AuthenticatedUserContext = React.createContext<AuthenticatedUser>(
  initialAuthenticatedUser
);

export default AuthenticatedUserContext;
