import fs from 'fs';
import path from 'path';


export const findProjectRoot = (startDir: string): string => {
  let dir = startDir;
  while (true) {
    if (fs.existsSync(path.join(dir, 'package.json'))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) throw new Error('Could not locate project root (no package.json found)');
    dir = parent;
  }
}
