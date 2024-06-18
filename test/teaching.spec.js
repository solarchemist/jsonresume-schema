var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/teaching.json');

test('teaching - valid', (t) => {
  validate(fixtures.teachingValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching - invalid', (t) => {
  validate(fixtures.teachingInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('teaching[].name - valid', (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching[].name - invalid', (t) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('teaching[].institution - valid', (t) => {
  validate(fixtures.institutionValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching[].institution - invalid', (t) => {
  validate(fixtures.institutionInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('teaching[].startDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.startDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
 });

test('teaching[].startDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching[].startDate - valid [YYYY]', (t) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching[].startDate - invalid', (t) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('teaching[].endDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.endDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching[].endDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
 });

 test('teaching[].endDate - valid [YYYY]', (t) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching[].endDate - invalid', (t) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('teaching[].url - valid', (t) => {
  validate(fixtures.urlValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching[].url - invalid', (t) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('teaching[].summary - valid', (t) => {
  validate(fixtures.summaryValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('teaching[].summary - invalid', (t) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});
