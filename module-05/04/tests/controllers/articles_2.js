var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app');
var expect = chai.expect;

chai.use(chaiHttp);


describe('Articles Controller (Version 2)', () => {
  it('should list ALL articles on /articles GET', (done) => {
    chai.request(server)
      .get('/articles')
      .end((err,res) => {
        expect(res.status).to.equal(200);
        expect(res.text).to.include('Articles ');
        done();
      });
  });
  it('should list a SINGLE article on /articles/:title GET', (done) => {
    chai.request(server)
      .get('/articles/blah')
      .end((err,res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.html;
        expect(res.text).to.include(' article: ');
        done();
      });
  });
  it('should add a SINGLE article on /articles POST');
  it('should update a SINGLE article on /articles/:title PUT');
  it('should delete a SINGLE article on /articles/:title DELETE');
});
