let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('/GET Data List ', () => {
    it('it should get the datalist', (done) => {
        chai.request(server)
            .get('/data/get')
            .end((err, res) => {
                should.exist(res.body);
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property("status");
                res.body.should.have.property("data");
                done();
            });
    });
});
