import {promises} from 'fs';
import tsd from 'tsd';
import formatter from 'tsd/dist/lib/formatter';

const {readFile, writeFile} = promises;

const PACKAGE_JSON = './package.json';

async function main() {
  // tsd 0.14.0 does not support typesVersions key, despite being powered by
  // TypeScript 4.1
  // Thus, we must temporarily modify package.json
  const pkgText = await readFile(PACKAGE_JSON, 'utf8');
  const pkg: typeof import('./package.json') = JSON.parse(pkgText);

  const tempPkg = {
    ...pkg,
    types: Object.values(Object.values(pkg.typesVersions)[0])[0][0],
  };
  await writeFile(PACKAGE_JSON, JSON.stringify(tempPkg));

  try {
    const diagnostics = await tsd();
    if (diagnostics.length > 0) {
      throw new Error(formatter(diagnostics));
    }
  } finally {
    // Restore previous package.json
    await writeFile(PACKAGE_JSON, pkgText);
  }
}

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
})();
