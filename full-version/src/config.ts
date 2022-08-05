// types
import { ConfigProps } from 'types/config';

// ------------------------| CONFIG - THEME SETTINGS  |------------------------ //

const config: ConfigProps = {
  fontFamily: `'Public Sans', sans-serif`,
  i18n: 'en',
  miniDrawer: false,
  container: {
    disableGutters: false,
    fixed: false,
    maxWidth: false,
  },
  mode: 'light',
  presetColor: 'default',
  themeDirection: 'ltr',
  layout: 'vertical',
  presetLayout: 'default',
  colorIcon: false,
  header: {
    color: 'default',
    enableColorOnDark: false,
    position: 'fixed',
  },
  drawer: {
    color: 'default',
    fixed: true,
    image: 'default',
    caption: { show: true, color: 'default' },
    toggler: 'default',
    icon: 'default',
  },
};

export default config;

// ------------------------| CONSTANT - THEME  |------------------------ //

// server sub domain  or sub directory
// NOTE - don't add '/' at end off BASENAME
export const BASENAME = '/demos/admin-templates/datta-able/react/default';

// default path for first rendering
export const DEFAULT_PATH = '/dashboard/default';

// theme basic title
export const BASE_TITLE = ' | Datta Able REACT MUI Admin';

export const DRAWER_WIDTH = 260;

// ------------------------| CONSTANT - AUTHENTICATION  |------------------------ //

export const FIREBASE_API = {
  apiKey: 'AIzaSyAlA-jy7dpv4SxGD_6Ka1i5l6YOJANVyJU',
  authDomain: 'datta-able-react-hook.firebaseapp.com',
  projectId: 'datta-able-react-hook',
  storageBucket: 'datta-able-react-hook.appspot.com',
  messagingSenderId: '194472541027',
  appId: '1:194472541027:web:462efb7a5035da914ef156',
  measurementId: 'G-M4PFJDM1EZ',
};

export const AWS_API = {
  poolId: 'us-east-1_AOfOTXLvD',
  appClientId: '3eau2osduslvb7vks3vsh9t7b0',
};

export const JWT_API = {
  secret: 'SECRET-KEY',
  timeout: '1 days',
};

export const AUTH0_API = {
  client_id: 'CLhKXoEUbSlJSF8RrKB8oDX15pfZ2E1F',
  domain: 'dev-w0-vxep3.us.auth0.com',
};
