import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';
import { theme } from './theme';
import './styles.css';


addons.setConfig({
  theme: create(theme),
  sidebar: { showRoots: true },
});
