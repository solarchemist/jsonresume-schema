var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/projectsScientific.json');

test('projectsScientific - valid', (t) => {
  validate(fixtures.projectsScientificValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific - invalid', (t) => {
  validate(fixtures.projectsScientificInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].name - valid', (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].name - invalid', (t) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].description - valid', (t) => {
  validate(fixtures.descriptionValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].description - invalid', (t) => {
  validate(fixtures.descriptionInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].highlights - valid', (t) => {
  validate(fixtures.highlightsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].highlights - invalid', (t) => {
  validate(fixtures.highlightsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].highlights[item] - valid', (t) => {
  validate(fixtures.highlightsItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].highlights[item] - invalid', (t) => {
  validate(fixtures.highlightsItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].keywords - valid', (t) => {
  validate(fixtures.keywordsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].keywords - invalid', (t) => {
  validate(fixtures.keywordsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].keywords[item] - valid', (t) => {
  validate(fixtures.keywordsItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].keywords[item] - invalid', (t) => {
  validate(fixtures.keywordsItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].startDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.startDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].startDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].startDate - valid [YYYY]', (t) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].startDate - invalid', (t) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].endDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.endDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].endDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].endDate - valid [YYYY]', (t) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].endDate - invalid', (t) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].roles - valid', (t) => {
  validate(fixtures.rolesValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].roles - invalid', (t) => {
  validate(fixtures.rolesInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].roles[item] - valid', (t) => {
  validate(fixtures.rolesItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].roles[item] - invalid', (t) => {
  validate(fixtures.rolesItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].entity - valid', (t) => {
  validate(fixtures.entityValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].entity - invalid', (t) => {
  validate(fixtures.entityInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('projectsScientific[].type - valid', (t) => {
  validate(fixtures.typeValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('projectsScientific[].type - invalid', (t) => {
  validate(fixtures.typeInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});
