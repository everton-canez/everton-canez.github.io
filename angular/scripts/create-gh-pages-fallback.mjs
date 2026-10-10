import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const browserOutput = join(import.meta.dirname, '..', 'dist', 'browser');
copyFileSync(join(browserOutput, 'index.html'), join(browserOutput, '404.html'));
