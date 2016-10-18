var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
const models = require('../../models');

describe('Author Model', function() {
  before(function(done) {
    models.Author.sync({ force : true }) // drops table and re-creates it
      .then(function() {
        done(null);
      })
      .catch(function(error) {
        done(error);
      });
  });


  it('should contain a first_name property',function(done) {
    var a1 = models.Author.build();
    expect(a1).to.have.property('first_name');
    done();
  });
  it('should contain a last_name property',function(done) {
    var a1 = models.Author.build();
    expect(a1).to.have.property('last_name');
    done();
  });
  it('should contain a bio property',function(done) {
    var a1 = models.Author.build();
    expect(a1).to.have.property('bio');
    done();
  });
  it('should NOT contain a secret property',function(done) {
    var a1 = models.Author.build();
    expect(a1).to.not.have.property('secret');
    done();
  });


  describe('creating authors', function () {
    it('should not save when missing a first_name',function (done) {
      models.Author.create({
      })
      .then(function () {
        done('failed'); // Fail if it SAVES
      })
      .catch(function (e) {
        done(); // Pass it it does not save
      });
    });

    it('should not save if bio is more than 500 chars',function (done) {
      models.Author.create({
        first_name: 'Jane',
        last_name: 'Smith',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
      })
        .then(function () {
          done('failed'); // Fail if it SAVES
        })
        .catch(function (e) {
          done();
        });
    });

    it('should save when all properties are properly provided',function (done) {
      models.Author.create({
        first_name: 'Jackie',
        last_name: 'Ortiz',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      })
        .then(function () {
          done(); // Pass if it SAVES
        })
        .catch(function (e) {
          done(e);
        });
    });

  });

});
