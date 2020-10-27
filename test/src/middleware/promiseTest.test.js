const {createRequest, createResponse} = require('node-mocks-http');
const promiseTest = require('../../../src/middleware/promiseTest');
const sinon = require('sinon');
const chai = require("chai");
const expect = chai.expect;

describe('promiseTest middleware', () => {
    let fakeRequest;
    let fakeResponse;
    let stubResponseJson;

    beforeEach(() => {
        fakeRequest = createRequest();
        fakeResponse = createResponse();

        stubResponseJson = sinon.stub(fakeResponse, 'json');
    });

    afterEach(() => {
        stubResponseJson.restore();
    });

    it('should render expected json when Promise resolves', () => {
        const expectedJson = {
            message: 'resolved Promise',
            error: false
        };

        return promiseTest(fakeRequest, fakeResponse)
            .then(() => {
                expect(stubResponseJson);
                sinon.spy().calledWithExactly(expectedJson);
            });
    });

    it('should render expected json when Promise rejects', () => {
        fakeRequest.query.fail = true;
        const expectedJson = {
            message: 'rejected Promise',
            error: true
        };

        return promiseTest(fakeRequest, fakeResponse)
            .then(() => {
                expect(stubResponseJson)
                sinon.spy().calledWithExactly(expectedJson);
            });
    });
});
