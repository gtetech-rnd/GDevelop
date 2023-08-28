// @flow
import * as React from 'react';
import { Trans } from '@lingui/macro';
import { Column, Line } from '../../../UI/Grid';
import { Drawer } from '@material-ui/core';
import { useResponsiveWindowWidth } from '../../../UI/Reponsive/ResponsiveWindowMeasurer';
import IconButton from '../../../UI/IconButton';
import DoubleChevronArrowRight from '../../../UI/CustomSvgIcons/DoubleChevronArrowRight';
import VerticalTabButton from '../../../UI/VerticalTabButton';
import DoubleChevronArrowLeft from '../../../UI/CustomSvgIcons/DoubleChevronArrowLeft';
import PickAxeIcon from '../../../UI/CustomSvgIcons/PickAxe';
import SchoolIcon from '../../../UI/CustomSvgIcons/School';
import GoogleControllerIcon from '../../../UI/CustomSvgIcons/GoogleController';
import WebIcon from '../../../UI/CustomSvgIcons/Web';
import Sun from '../../../UI/CustomSvgIcons/Sun';
import Store from '../../../UI/CustomSvgIcons/Store';
import Preferences from '../../../UI/CustomSvgIcons/Preferences';
import GDevelopGLogo from '../../../UI/CustomSvgIcons/GDevelopGLogo';
import GDevelopThemeContext from '../../../UI/Theme/GDevelopThemeContext';
import Paper from '../../../UI/Paper';

export const styles = {
  desktopMenu: {
    paddingTop: 40,
    paddingBottom: 10,
    minWidth: 230,
    display: 'flex',
    flexDirection: 'column',
  },
  mobileMenu: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  drawerContent: {
    height: '100%',
    width: 250,
    paddingBottom: 10,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  drawerTopButtonsContainer: {
    flex: 1,
    marginTop: 'env(safe-area-inset-top)',
  },
  bottomButtonsContainer: {
    marginBottom: 'env(safe-area-inset-bottom)',
  },
};

export type HomeTab =
  | 'build';

const tabs: {
  label: React.Node,
  tab: HomeTab,
  getIcon: (color: string) => React.Node,
  id: string,
}[] = [
  {
    label: <Trans>Build</Trans>,
    tab: 'build',
    id: 'home-build-tab',
    getIcon: color => <PickAxeIcon fontSize="small" color={color} />,
  },
];
type Props = {|
  setActiveTab: HomeTab => void,
  activeTab: HomeTab,
  onOpenPreferences: () => void,
  onOpenAbout: () => void,
|};

export const HomePageMenu = ({
  setActiveTab,
  activeTab,
  onOpenPreferences,
  onOpenAbout,
}: Props) => {
  const windowWidth = useResponsiveWindowWidth();
  const isMobileOrSmallScreen =
    windowWidth === 'small' || windowWidth === 'medium';
  const GDevelopTheme = React.useContext(GDevelopThemeContext);
  const [
    isHomePageMenuDrawerOpen,
    setIsHomePageMenuDrawerOpen,
  ] = React.useState(false);

  const buttons: {
    label: React.Node,
    getIcon: (color: string) => React.Node,
    id: string,
    onClick: () => void,
  }[] = [
    {
      label: <Trans>Preferences</Trans>,
      id: 'settings',
      onClick: onOpenPreferences,
      getIcon: color => <Preferences fontSize="small" color={color} />,
    },
  ];

  return (
    <>
      <Paper
        style={{
          ...(isMobileOrSmallScreen ? styles.mobileMenu : styles.desktopMenu),
          borderRight: `1px solid ${GDevelopTheme.home.separator.color}`,
        }}
        square
        background="dark"
      >
        <Column expand>
          {isMobileOrSmallScreen && (
            <IconButton
              onClick={() => setIsHomePageMenuDrawerOpen(true)}
              size="small"
            >
              <DoubleChevronArrowRight />
            </IconButton>
          )}
          {tabs.map(({ label, tab, getIcon, id }) => (
            <VerticalTabButton
              key={id}
              label={label}
              onClick={() => setActiveTab(tab)}
              getIcon={getIcon}
              isActive={activeTab === tab}
              hideLabel={isMobileOrSmallScreen}
              id={id}
            />
          ))}
        </Column>

        <div style={styles.bottomButtonsContainer}>
          <Column>
            {buttons.map(({ label, getIcon, onClick, id }) => (
              <VerticalTabButton
                key={id}
                label={label}
                onClick={onClick}
                getIcon={getIcon}
                isActive={false}
                hideLabel={isMobileOrSmallScreen}
                id={id}
              />
            ))}
          </Column>
        </div>
      </Paper>
      <Drawer
        open={isHomePageMenuDrawerOpen}
        PaperProps={{
          style: {
            ...styles.drawerContent,
            backgroundColor: GDevelopTheme.home.header.backgroundColor,
          },
          className: 'safe-area-aware-left-container',
        }}
        onClose={() => {
          setIsHomePageMenuDrawerOpen(false);
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Line expand>
          <Column expand>
            <div style={styles.drawerTopButtonsContainer}>
              <Column noMargin expand>
                <Line noMargin justifyContent="flex-end">
                  <IconButton
                    onClick={() => {
                      setIsHomePageMenuDrawerOpen(false);
                    }}
                    size="small"
                  >
                    <DoubleChevronArrowLeft />
                  </IconButton>
                </Line>
                {tabs.map(({ label, tab, getIcon }, index) => (
                  <VerticalTabButton
                    key={index}
                    label={label}
                    onClick={() => {
                      setActiveTab(tab);
                      setIsHomePageMenuDrawerOpen(false);
                    }}
                    getIcon={getIcon}
                    isActive={activeTab === tab}
                  />
                ))}
              </Column>
            </div>
            <div style={styles.bottomButtonsContainer}>
              <Column noMargin>
                {buttons.map(({ label, getIcon, onClick, id }) => (
                  <VerticalTabButton
                    key={id}
                    label={label}
                    onClick={onClick}
                    getIcon={getIcon}
                    isActive={false}
                  />
                ))}
              </Column>
            </div>
          </Column>
        </Line>
      </Drawer>
    </>
  );
};
