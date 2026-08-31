import { parseArgs } from 'util';
import { initFonts, updateFonts, } from './fonts';


/**
 * @todo add one of those guide-manual-things that explain the available command arguments
 */
const main = (): void => {
  const { values, positionals, } = parseArgs({
    args: process.argv.slice(2),
    options: {
      web: { type: 'boolean' },
      ios: { type: 'boolean' },
      android: { type: 'boolean' },
    },
    allowPositionals: true,
  });
  const [action, target] = positionals;

  if (action === 'init') {
    initFonts(values);
    return;
  }

  if (action === 'update' && target === 'fonts') {
    updateFonts(values);
    return;
  } else {
    console.log('Usage: npx lucid-uik update fonts [--web] [--ios] [--android]');
    return;
  }
}


main();
