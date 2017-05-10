var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where the program is running.
var PORT = process.env.PORT || 4000;
var server = supertest.agent("http://localhost:" + PORT);

// UNIT test begin

describe("SAMPLE unit test", function() {

    // #1 should return home page
    it("should return home page", function(done) {
        // calling home page
        server
            .get("/")
            .expect("Content-type", /text/)
            .expect(200) // THis is HTTP response
            .end(function(err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                done();
            });
    });

    // #2 should return yolo page
    it("should return yolo page", function(done) {
        // calling yolo page
        server
            .get("/yolo")
            .expect("Content-type", /text/)
            .expect(200) // THis is HTTP response
            .end(function(err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                res.text.should.equal("Hello Yolo!");
                done();
            });
    });

});