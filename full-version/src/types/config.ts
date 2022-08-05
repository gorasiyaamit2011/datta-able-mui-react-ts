// @mui
import { AppBarProps } from '@mui/material';

// ------------------------| TYPES - CONFIG  |------------------------ //

export type ThemeDirection = 'ltr' | 'rtl';
export type ThemeMode = 'light' | 'dark';
export type FontFamily = `'Inter', sans-serif` | `'Poppins', sans-serif` | `'Roboto', sans-serif` | `'Public Sans', sans-serif`;
export type PresetColor = 'default' | 'theme1' | 'theme2' | 'theme3' | 'theme4' | 'theme5' | 'theme6' | 'theme7' | 'theme8';
export type ThemeColor = 'default' | 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning';
export type DrawerImage = 'default' | 'navbar-image-1' | 'navbar-image-2' | 'navbar-image-3' | 'navbar-image-4' | 'navbar-image-5';

export type DrawerTogglerStyle = 'default' | 'style-1' | 'style-2';
export type DrawerIconStyle = 'default' | 'style-1' | 'style-2' | 'style-3' | 'style-4' | 'style-5';

// 'ar' - Arebic, 'en' - English, 'fr' - French, 'ro' - Romanian, 'vn' - Vietnamese, 'zh' - Chinese,
export type I18n = 'ar' | 'en' | 'fr' | 'ro' | 'vn' | 'zh';

export type ThemeContainer = {
  maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false | string;
  fixed: boolean;
  disableGutters: boolean;
};

export type ThemeLayout = 'vertical' | 'horizontal';
export type ThemePresetLayout = 'default' | 'layout-1' | 'layout-2' | 'layout-3' | 'layout-4';

export type ThemeAppBar = {
  color: AppBarProps['color'];
  enableColorOnDark: boolean;
  position: AppBarProps['position'];
};

export type DrawerCaption = {
  show: boolean;
  color: ThemeColor;
};

export type ThemeDrawer = {
  color: ThemeColor;
  fixed: boolean;
  image: DrawerImage;
  caption: DrawerCaption;
  toggler: DrawerTogglerStyle;
  icon: DrawerIconStyle;
};

export type ConfigProps = {
  fontFamily: FontFamily;
  i18n: I18n;
  miniDrawer: boolean;
  container: ThemeContainer;
  mode: ThemeMode;
  presetColor: PresetColor;
  themeDirection: ThemeDirection;
  layout: ThemeLayout;
  presetLayout: ThemePresetLayout;
  colorIcon: boolean;
  header: ThemeAppBar;
  drawer: ThemeDrawer;
};

export type ConfigContextProps = {
  fontFamily: FontFamily;
  i18n: I18n;
  miniDrawer: boolean;
  container: ThemeContainer;
  mode: ThemeMode;
  presetColor: PresetColor;
  themeDirection: ThemeDirection;
  layout: ThemeLayout;
  presetLayout: ThemePresetLayout;
  colorIcon: boolean;
  header: ThemeAppBar;
  drawer: ThemeDrawer;
  onChangeContainer: VoidFunction;
  onChangeLocalization: (lang: I18n) => void;
  onChangeMode: (mode: ThemeMode) => void;
  onChangePresetColor: (theme: PresetColor) => void;
  onChangeDirection: (direction: ThemeDirection) => void;
  onChangeMiniDrawer: (miniDrawer: boolean) => void;
  onChangeFontFamily: (fontFamily: FontFamily) => void;
};
