/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

module spec {

    chai.should();
    var expect = chai.expect;

    describe("localStorage", function() {

        describe("default", function() {

            localStorage.clear();

            it("is empty.", function() {
                localStorage.should.be.empty;
            });

        });

        describe("set/get of localStorage item", function() {
            var key: string = 'funny'
            var data: Object = {
                'name': 'funnythingz',
                'id': '123'
            };

            it("unset", function() {
                expect(localStorage.getItem(key)).to.be.null;
            });

            it("set", function() {
                localStorage.setItem(key, JSON.stringify(data));
            });

            it("get", function() {
                JSON.parse(localStorage.getItem(key))["name"].should.be.equal('funnythingz');
                JSON.parse(localStorage.getItem(key))["id"].should.be.equal('123');
            });

            it("remove", function() {
                localStorage.removeItem(key);
                expect(localStorage.getItem(key)).to.be.null;
            });

            it("clear all", function() {
                localStorage.clear();
                localStorage.should.be.empty;
            });

        });

    });

}
