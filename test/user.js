let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

describe('/POST user to register', () => {
    it('it should Register a register', (done) => {
        let user = {
            username: "test",
            password: "test",
            role: 'admin'
        };
        chai.request(server)
            .post('/auth/register')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property("user");
                res.body.should.have.property("auth");
                done();
            });
    });
});

describe('/POST user to login', () => {
    it('it should Register a login', (done) => {
        let user = {
            username: "test",
            password: "test",
            role: 'admin'
        };
        chai.request(server)
            .post('/auth/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property("user");
                res.body.should.have.property("logged");
                done();
            });
    });
});
