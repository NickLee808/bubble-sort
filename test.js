//jshint esversion:6

const chai = require('chai');
const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;
const bubbler = require('./bubbler');
const insertioner = require('./insertioner');

describe('Bubbler', () => {

  describe('Test Cases', () => {

    it('should sort array [5,1,4,2,8]', () => {
      expect(bubbler([5,1,4,2,8])).to.deep.equal([1,2,4,5,8]);
    });

    it('should accept empty arrays', () => {
      expect(bubbler([])).to.deep.equal([]);
    });

    it('should sort arrays with one value', () => {
      expect(bubbler([5])).to.deep.equal([5]);
    });

    it('should sort array with all zeroes', () => {
      expect(bubbler([0,0,0,0,0])).to.deep.equal([0,0,0,0,0]);
    });

    it('should sort array with duplicate values', () => {
      expect(bubbler([4,2,2,10,2])).to.deep.equal([2,2,2,4,10]);
    });

    it('should sort array with decimals', () => {
      expect(bubbler([10,0.2,1.6,5,8])).to.deep.equal([0.2,1.6,5,8,10]);
    });

    it('should sort array with negative values', () => {
      expect(bubbler([-1,10,-2,4,0.2])).to.deep.equal([-2,-1,0.2,4,10]);
    });

  });

  describe('Functionality', () => {

    it('should not accept strings', () => {
      expect(bubbler('dildo')).to.deep.equal('Received string while expecting array');
    });

    it('should not accept numbers', () => {
      expect(bubbler(69)).to.deep.equal('Received number while expecting array');
    });

    it('should not accept booleans', () => {
      expect(bubbler(true)).to.deep.equal('Received boolean while expecting array');
    });

    it('should not accept other objects', () => {
      expect(bubbler({})).to.deep.equal('Received object while expecting array');
    });

    it('should not accept arrays that include non-numbers', () => {
      expect(bubbler([2,4,1,'dildo', 3])).to.deep.equal('Received incomputable input');
    });

  });

});

describe('Insertioner', () => {

  describe('Test Cases', () => {

    it('should sort array [5,1,4,2,8]', () => {
      expect(insertioner([5,1,4,2,8])).to.deep.equal([1,2,4,5,8]);
    });

    it('should accept empty arrays', () => {
      expect(insertioner([])).to.deep.equal([]);
    });

    it('should sort arrays with one value', () => {
      expect(insertioner([5])).to.deep.equal([5]);
    });

    it('should sort array with all zeroes', () => {
      expect(insertioner([0,0,0,0,0])).to.deep.equal([0,0,0,0,0]);
    });

    it('should sort array with duplicate values', () => {
      expect(insertioner([4,2,2,10,2])).to.deep.equal([2,2,2,4,10]);
    });

    it('should sort array with decimals', () => {
      expect(insertioner([10,0.2,1.6,5,8])).to.deep.equal([0.2,1.6,5,8,10]);
    });

    it('should sort array with negative values', () => {
      expect(insertioner([-1,10,-2,4,0.2])).to.deep.equal([-2,-1,0.2,4,10]);
    });

  });

  describe('Functionality', () => {

    it('should not accept strings', () => {
      expect(insertioner('dildo')).to.deep.equal('Received string while expecting array');
    });

    it('should not accept numbers', () => {
      expect(insertioner(69)).to.deep.equal('Received number while expecting array');
    });

    it('should not accept booleans', () => {
      expect(insertioner(true)).to.deep.equal('Received boolean while expecting array');
    });

    it('should not accept other objects', () => {
      expect(insertioner({})).to.deep.equal('Received object while expecting array');
    });

    it('should not accept arrays that include non-numbers', () => {
      expect(insertioner([2,4,1,'dildo', 3])).to.deep.equal('Received incomputable input');
    });

  });

});