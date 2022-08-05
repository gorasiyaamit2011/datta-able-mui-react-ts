// eslint-disable-next-line
import * as AppBar from '@mui/material/AppBar';

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    error;
    success;
    warning;
    info;
  }
}
