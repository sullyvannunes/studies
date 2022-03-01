import { createReadStream, createWriteStream } from 'fs';

const DEFAULT_SIZE = 4 * (2**10);

const rs = createReadStream('./index.html', {
  encoding: 'utf-8',
  start: DEFAULT_SIZE,
  end: 2*DEFAULT_SIZE - 1
});

const ws = createWriteStream('./output.html', 'utf-8');

ws.on('ready', () => {
  rs.on('data', chunk => {
    ws.write(chunk + "Darwin")
  })
})
