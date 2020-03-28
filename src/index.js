const path = require('path');


async function run() {
    const { field } = require('yargs')
        .option('field', {
            alias: 'f',
            type: 'array',
            desc: 'Field to extract from the current directory. Can be defined multiple times.',
            choices: [
                'git.branch',
                'git.hash',
                'npm.version'
            ],
            required: true
        })
        .strict(true)
        .argv
    
    const values = await extractFields(field);

    outputValues(values);
};

function outputValues(values) {
    console.log(JSON.stringify(values, null, 2));
};

async function extractFields(fields) {
    const data = {};

    for (const name of fields) {
        data[name] = await extractField(name);
    }

    return data;
};

async function extractField(name) {
    const segments = name.split('.');

    const modulePath = path.join(__dirname, ...segments);

    const extractor = require(modulePath);

    return await extractor();
};

module.exports = {
    run
};


