import { parseArgs } from 'util';
import { initFonts, updateFonts, } from './fonts';


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
} else {
  console.log('Usage: npx lucidjs init [--web] [--ios] [--android]');
}


if (action === 'init' && target === 'fonts') {
  updateFonts(values);
} else {
  console.log('Usage: npx lucidjs update fonts [--web] [--ios] [--android]');
}
