/**
 * @fileoverview Tests for `maxdepth` (JSHint) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jshint/maxdepth.js')

var getFn = caller(lib)

describe('jshint#maxdepth', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()

    expect(fn(42)).to.eql([2, 42])
  })
})
