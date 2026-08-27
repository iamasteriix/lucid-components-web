import type { AppLayoutViewProps } from './app-layout-view.types';
import { ThemeProvider } from '@/theme';
import styles from './app-layout-view.module.css';


export const AppLayoutView = ({
  themes,
  persister,
  children,
  testID,
}: AppLayoutViewProps) => {
  return (
    <div
      style={ styles }
      data-component='app-layout-view'
      data-testid={ testID }
    >
      <ThemeProvider
        themes={ themes }
        persister={ persister }
      >
        { children }
      </ThemeProvider>
    </div>
  );
}
