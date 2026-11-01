import {test} from 'node:test';
import assert from 'node:assert/strict';
import {total,bestQuote,insights} from '../logic.js';
test('comparison includes delivery and hidden fees',()=>{const a={price:100,delivery:30,fees:20},b={price:120,delivery:0,fees:0};assert.equal(total(a),150);assert.equal(bestQuote([a,b]),b);assert.equal(bestQuote([]),null)});
test('flags refund, renewal, exclusions, advance and warranty clauses',()=>{const result=insights({terms:'Non-refundable deposit upfront. Auto-renewal. Installation not included. One year warranty.'});assert.equal(result.length,5);assert.match(result[0],/not be refundable/)});
test('does not invent warnings for ordinary terms',()=>assert.deepEqual(insights({terms:'Delivery within five days. Payment on receipt.'}),[]));
