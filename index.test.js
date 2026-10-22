const test = require('node:test');
const assert = require('node:assert');
const server = require('./index');

test('GET / returns hello message', async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  const res = await fetch(`http://localhost:${port}/`);
  const body = await res.text();

  assert.strictEqual(res.status, 200);
  assert.match(body, /Hello/);

  server.close();
});