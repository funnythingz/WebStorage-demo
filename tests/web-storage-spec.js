var spec;
(function (spec) {
    chai.should();
    var expect = chai.expect;

    describe("localStorage", function () {
        describe("default", function () {
            localStorage.clear();

            it("is empty.", function () {
                expect(localStorage).to.be.empty;
            });
        });

        describe("set/get of localStorage item", function () {
            var key = 'funny';
            var data = {
                'name': 'funnythingz',
                'id': '123'
            };

            it("unset", function () {
                expect(localStorage.getItem(key)).to.null;
            });

            it("set", function () {
                localStorage.setItem(key, JSON.stringify(data));
            });

            it("get", function () {
                JSON.parse(localStorage.getItem(key))["name"].should.be.equal('funnythingz');
                JSON.parse(localStorage.getItem(key))["id"].should.be.equal('123');
            });

            it("remove", function () {
                localStorage.removeItem(key);
                expect(localStorage.getItem(key)).to.null;
            });

            it("clear all", function () {
                localStorage.clear();
                expect(localStorage).to.be.empty;
            });
        });
    });
})(spec || (spec = {}));
