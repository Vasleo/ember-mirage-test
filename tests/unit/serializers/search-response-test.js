import { moduleForModel, test } from 'ember-qunit';

moduleForModel('search-response', 'Unit | Serializer | search response', {
  // Specify the other units that are required for this test.
  needs: ['serializer:search-response']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
