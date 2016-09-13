var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Articles', function() {
  it('should list ALL articles on /articles GET');
  it('should list a SINGLE article on /articles/:title GET');
  it('should add a SINGLE blob on /articles POST');
  it('should update a SINGLE blob on /articles/:title PUT');
  it('should delete a SINGLE blob on /articles/:title DELETE');
});
