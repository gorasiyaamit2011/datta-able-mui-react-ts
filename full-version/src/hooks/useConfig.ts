import { useContext } from 'react';
import { ConfigContext } from 'contexts/ConfigContext';

// ------------------------| HOOKS - CONFIG CONTEXT  |------------------------ //

const useConfig = () => useContext(ConfigContext);

export default useConfig;
