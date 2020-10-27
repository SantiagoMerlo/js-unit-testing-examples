const fakeData = require('../data/fakeData');

const getAll = () => {
    return Promise.resolve(fakeData.events);
};

module.exports = {
    getAll
};
