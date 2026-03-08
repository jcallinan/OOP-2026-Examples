const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const outDir = path.join(projectRoot, '.tmp');

fs.rmSync(outDir, { recursive: true, force: true });

const candidates = [
  path.join(projectRoot, 'node_modules', 'typescript', 'bin', 'tsc'),
  path.resolve(projectRoot, '../../week7/JavaScript-Chapter1-JS-and-TS/node_modules/typescript/bin/tsc')
];

const tscPath = candidates.find((candidate) => fs.existsSync(candidate));

if (!tscPath) {
  console.error('Could not locate TypeScript compiler.');
  console.error('Looked in:');
  candidates.forEach((candidate) => console.error(` - ${candidate}`));
  console.error('Run "npm install typescript --save-dev" in week9/queue-deque-project and try again.');
  process.exit(1);
}

const args = [
  tscPath,
  '--target', 'ES2020',
  '--module', 'commonjs',
  '--outDir', '.tmp',
  'src/count-students.ts',
  'src/examples/count-students-example.ts'
];

const result = spawnSync(process.execPath, args, {
  cwd: projectRoot,
  stdio: 'inherit'
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
