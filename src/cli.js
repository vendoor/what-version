const availableFields = require('./fields').available;
const whatVersion = require('./index');


async function run() {
    const { field } = require('yargs')
        .option('field', {
            alias: 'f',
            type: 'array',
            desc: 'Field to extract from the current directory. Can be defined multiple times.',
            choices: availableFields,
            required: true
        })
        .strict(true)
        .argv
    
    const values = await whatVersion.query(field, '.');

    outputValues(values);
};

function outputValues(values) {
    console.log(JSON.stringify(values, null, 2));
};

module.exports = {
    run
};
