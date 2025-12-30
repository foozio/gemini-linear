const { test, describe, it, before, after, mock } = require('node:test');
const assert = require('node:assert');
const child_process = require('node:child_process');
const path = require('node:path');

describe('index.js', () => {
  it('should be testable', () => {
      assert.ok(true);
  });

  it('should fail if LINEAR_API_KEY is missing', (t, done) => {
    const env = { ...process.env };
    delete env.LINEAR_API_KEY;

    const child = child_process.spawn('node', [path.resolve(__dirname, '../index.js')], {
      env: env,
      stdio: 'pipe'
    });

    let stderr = '';
    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      try {
        assert.strictEqual(code, 1, 'Process should exit with code 1');
        assert.match(stderr, /LINEAR_API_KEY environment variable is not set/, 'Stderr should contain error message');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
