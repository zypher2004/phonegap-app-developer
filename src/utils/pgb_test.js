import expect from 'expect';

import * as pgb from './pgb';

describe('pgb session actions', () => {
  it('should have a login function which returns a promise', () => {
    expect(typeof pgb.login).toEqual('function');
    expect(typeof pgb.login()).toEqual('object');
    expect(typeof pgb.login().then).toEqual('function');
  });

  it('should return an access token', (done) => {
  	pgb.login().then((token) => {
  		expect(typeof token).toEqual('string');
  		done();
  	});
  }).timeout(3000);
});
