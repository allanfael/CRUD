import 'styled-components';
import color from './colors';

declare module 'styled-components' {
  type ThemeType = typeof color;

  export interface DefaultTheme extends ThemeType {}
}
