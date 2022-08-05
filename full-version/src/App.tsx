// @mui
import { AppBar, Button, Typography } from '@mui/material';

// icons
import * as Icon from 'react-feather';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import useConfig from 'hooks/useConfig';

// ------------------------| APP -   |------------------------ //

function App() {
  const { themeDirection, onChangeDirection } = useConfig();

  return (
    <>
      <h1>Icons Feather</h1>
      <Icon.Activity />
      <Icon.Camera color="blue" size={45} />
      <Icon.Camera color="red" />
      <Icon.Home />
      <Button>Click Me</Button>
      <AcUnitIcon />
      <AppBar color="error">Demo</AppBar>
      <Typography>{themeDirection}</Typography>
      <Button onClick={() => onChangeDirection(themeDirection === 'ltr' ? 'rtl' : 'ltr')}>Change Direction</Button>
    </>
  );
}

export default App;
