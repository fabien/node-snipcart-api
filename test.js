require('should');

const Snipcart = require('./index');

describe('Snipcart API', () => {
  it('should create an instance (1)', () => {
    const snipcart = new Snipcart('SECRET_KEY_1');
    return snipcart.api.orders.getAll().catch((err) => {
      err.isAxiosError.should.be.True();
      err.response.status.should.equal(401);
      err.response.statusText.should.equal('Unauthorized');
      err.config.auth.should.eql({ username: 'SECRET_KEY_1', password: '' });
    });
  });

  it('should create an instance (2)', () => {
    const snipcart = new Snipcart('SECRET_KEY_2');
    return snipcart.api.orders.getAll().catch((err) => {
      err.isAxiosError.should.be.True();
      err.response.status.should.equal(401);
      err.response.statusText.should.equal('Unauthorized');
      err.config.auth.should.eql({ username: 'SECRET_KEY_2', password: '' });
    });
  });
});
