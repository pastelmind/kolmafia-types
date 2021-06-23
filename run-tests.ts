import tsd from 'tsd';
import formatter from 'tsd/dist/lib/formatter';

(async () => {
  try {
    // tsd 0.17.0 does not support `typingsFile` as a CLI argument yet
    const diagnostics = await tsd({
      cwd: __dirname,
      typingsFile: 'src/index.d.ts',
    });
    if (diagnostics.length > 0) {
      throw new Error(formatter(diagnostics));
    }
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
})();
