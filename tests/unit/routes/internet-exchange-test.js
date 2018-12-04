import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | internet-exchange', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:internet-exchange');
    assert.ok(route);
  });
});
