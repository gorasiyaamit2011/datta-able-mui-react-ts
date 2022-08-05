// @mui
import { Button } from '@mui/material';

// icons
import * as Icon from 'react-feather';
import AcUnitIcon from '@mui/icons-material/AcUnit';

// ------------------------| APP -   |------------------------ //

function App() {
  return (
    <>
      <h1>Icons Feather</h1>
      <Icon.Activity />
      <Icon.Camera color="blue" size={45} />
      <Icon.Camera color="red" />
      <Icon.Home />
      <Button>Click Me</Button>
      <AcUnitIcon />
    </>
  );
}

export default App;
