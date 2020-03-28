module.exports = async function gitHash() {
    const { stdout } = require('execa')
        .commandSync('git rev-parse HEAD');

    return stdout;
};
