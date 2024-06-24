var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/footer.json');

test('footer - valid', (t) => {
  validate(fixtures.footerValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('footer - invalid', (t) => {
  validate(fixtures.footerInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('footer.githash - valid', (t) => {
  validate(fixtures.githashValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('footer.githash - invalid', (t) => {
  validate(fixtures.githashInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

