const express = require('express')
const app = express();
const port = 3001
const phin = require('phin').unpromisified;

const url = `https://example.com`

app.get('/', (req, res) => res.send('you are not meant to be here!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

const tries = [];
function uptimer () {
  setInterval(() => {
    phin({
      method: 'GET',
      url: url
    }, (err, res) => {
      const x = Date.now()
      if (res.statusCode === 200) {
        tries.push(1)
        console.log('\x1b[32m' + `[!]; ${url}\n[!]; Website Pinged Lol\n[!]; Attempt Number ${tries.length}\n`);
      } else {
        console.log('\x1b[31m' + `[!]; ${url}\n[!]; Unsuccessful Request.\n[!]; ${Date.now() - x}ms\n`)
      }
    })
  }, parseInt(process.env.interval))
}

uptimer()
uptimer()
uptimer()
uptimer()
uptimer()
