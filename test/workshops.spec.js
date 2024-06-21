var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/workshops.json');

test('workshops - valid', (t) => {
  validate(fixtures.workshopsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops - invalid', (t) => {
  validate(fixtures.workshopsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].name - valid', (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].name - invalid', (t) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].location - valid', (t) => {
  validate(fixtures.locationValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].location - invalid', (t) => {
  validate(fixtures.locationInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].summary - valid', (t) => {
  validate(fixtures.summaryValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].summary - invalid', (t) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].highlights - valid', (t) => {
  validate(fixtures.highlightsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].highlights - invalid', (t) => {
  validate(fixtures.highlightsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].highlights[item] - valid', (t) => {
  validate(fixtures.highlightsItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].highlights[item] - invalid', (t) => {
  validate(fixtures.highlightsItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].keywords - valid', (t) => {
  validate(fixtures.keywordsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].keywords - invalid', (t) => {
  validate(fixtures.keywordsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].keywords[item] - valid', (t) => {
  validate(fixtures.keywordsItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].keywords[item] - invalid', (t) => {
  validate(fixtures.keywordsItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].startDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.startDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].startDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].startDate - valid [YYYY]', (t) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].startDate - invalid', (t) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].endDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.endDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].endDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].endDate - valid [YYYY]', (t) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].endDate - invalid', (t) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].url - valid', (t) => {
  validate(fixtures.urlValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].url - invalid', (t) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});


test('workshops[].contributions - valid', (t) => {
  validate(fixtures.contributionsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].contributions - invalid', (t) => {
  validate(fixtures.contributionsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('workshops[].contributions[item] - valid', (t) => {
  validate(fixtures.contributionsItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('workshops[].contributions[item] - invalid', (t) => {
  validate(fixtures.contributionsItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});
