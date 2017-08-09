const Nightmare = require('nightmare')
const assert = require('assert')

describe('Load a Page', function() {
  // Recommended: 5s locally, 10s to remote server, 30s from airplane ¯\_(ツ)_/¯
  this.timeout('30s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('Dollar Currency', () => {
    it('should get dollar currency for today', done => {
      nightmare
        .goto('http://dolarhoje.com/')
        .evaluate(() => {
          return {
            usd: document.querySelector('.estrangeira .symbol').innerText,
            brl: document.querySelector('.nacional .symbol').innerText
          }
        })
        .end()
        .then(function (symbols) {
          assert.equal('US$', symbols.usd)
          assert.equal('R$', symbols.brl)
          done()
        })
        .catch(done)
    })
  })
})