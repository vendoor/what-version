const fs = require('fs').promises;


module.exports = async function npmVersion() {
    const packageJsonContents = await fs.readFile('./package.json', { encoding: 'utf-8' });

    const { version } = JSON.parse(packageJsonContents);

    return version;
};
