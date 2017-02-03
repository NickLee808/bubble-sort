//jshint esversion:6

const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Bubble sort algorithm', () => {

  let arrayInput = [5,1,4,2,8];

  it('should return an array', () => {
    expect(arrayInput).to.be.an.array;
  });

  it('should not be a string', () => {
    expect(arrayInput).to.not.be.a.string;
  });

  it('should return a sorted array', () => {
    expect(arrayInput).to.equal([1,2,4,5,8]);
  });

});