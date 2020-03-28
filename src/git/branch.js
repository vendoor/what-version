module.exports = async function gitBranch() {
    const { stdout } = require('execa')
        .commandSync('git rev-parse --abbrev-ref HEAD');

    return stdout;
};
