const eventsService = require('../../../../src/services/events');
const chai = require("chai");
const expect = chai.expect;

describe('events service', () => {
    describe('getAll()', () => {
        it('should resolve with expected data', () => {
            const expectedData = [];

            eventsService.getAll()
                .should.be.fulfilled
                .then((data) => {
                    expect(data).to.deep.equal(expectedData);
                });
        });
    });
});
