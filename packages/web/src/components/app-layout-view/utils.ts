import styles from './style.module.css';


export const resolveVariantClasses = () => {
  const classes: string[] = [styles['app-layout-view']];

  return classes.filter(Boolean).join(' ');
}
