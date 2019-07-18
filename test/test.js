const whois = require('../index');

// parse used to parse raw data
const parse = require('../src/utils/parse');

describe('whois', () => {
  let raw;

  before(async () => {
    raw = await whois.raw('mozilla.org');
  });

  it('should parse raw data into json object', done => {
    parse(raw, 'mozilla.org').then(res => {
      // test should error out if not valid
      JSON.stringify(res);

      // console the object
      console.log(res);
      done();
    })
  });
  it('should return raw in json whois', done => {
    whois.json('mozilla.org')
      .then((response) => {
         if(response["raw"] != undefined) {
           done();
         } else {
           done(1);
         }
      })
  });
});
