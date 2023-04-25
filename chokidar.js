import fs from 'fs';
import path from 'path';
import chokidar from 'chokidar';

const input = 'src/components/uis';
chokidar.watch(`${input}/**/*.tsx`).on('all', (event, file) => {
  if (event !== 'add' && event !== 'unlink') return;

  const output = 'src/styles/uis';
  const extSuffix = '.module.scss';
  const outputDir = path.dirname(file).replace(input, output);
  const fileName = path.parse(file).name.toLowerCase();
  const targetCss = `${outputDir}/${fileName + extSuffix}`;

  if (event === 'add') {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    if (!fs.existsSync(targetCss)) {
      fs.writeFileSync(targetCss, '');
    }
  } else if (event === 'unlink') {
    fs.unlink(targetCss, (err) => {
      if (err) throw err;
    });
  }
});
