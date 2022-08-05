import { createContext, ReactNode } from 'react';

// project import
import config from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

// types
import { ConfigContextProps, FontFamily, I18n, PresetColor, ThemeDirection, ThemeMode } from 'types/config';

// initial state
const initialState: ConfigContextProps = {
  ...config,
  onChangeContainer: () => {},
  onChangeLocalization: (lang: I18n) => {},
  onChangeMode: (mode: ThemeMode) => {},
  onChangePresetColor: (theme: PresetColor) => {},
  onChangeDirection: (direction: ThemeDirection) => {},
  onChangeMiniDrawer: (miniDrawer: boolean) => {},
  onChangeFontFamily: (fontFamily: FontFamily) => {},
};

// ------------------------| CONTEXT - CONFIG  |------------------------ //

const ConfigContext = createContext(initialState);

type ConfigContextProviderProps = {
  children: ReactNode;
};

function ConfigProvider({ children }: ConfigContextProviderProps) {
  const [config, setConfig] = useLocalStorage('datta-able-mui-react-ts-config', initialState);

  const onChangeContainer = () => {
    setConfig({
      ...config,
      container: !config.container,
    });
  };

  const onChangeLocalization = (lang: I18n) => {
    setConfig({
      ...config,
      i18n: lang,
    });
  };

  const onChangeMode = (mode: ThemeMode) => {
    setConfig({
      ...config,
      mode,
    });
  };

  const onChangePresetColor = (theme: PresetColor) => {
    setConfig({
      ...config,
      presetColor: theme,
    });
  };

  const onChangeDirection = (direction: ThemeDirection) => {
    setConfig({
      ...config,
      themeDirection: direction,
    });
  };

  const onChangeMiniDrawer = (miniDrawer: boolean) => {
    setConfig({
      ...config,
      miniDrawer,
    });
  };

  const onChangeFontFamily = (fontFamily: FontFamily) => {
    setConfig({
      ...config,
      fontFamily,
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        ...config,
        onChangeContainer,
        onChangeLocalization,
        onChangeMode,
        onChangePresetColor,
        onChangeDirection,
        onChangeMiniDrawer,
        onChangeFontFamily,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };
