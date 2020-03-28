const path = require('path');

const availableFields = require('./fields').available;


function ensureAllFieldsAreAvailable(fields) {
    const unknown = [];

    fields.forEach(name => {
        if (!availableFields.includes(name)) {
            unknown.push(name);
        };
    });

    if (unknown.length > 0) {
        throw new Error('The following fields are unknown: ' + unknown.join(', '));
    }
};

function extractorForField(name) {
    const segments = name.split('.');

    const modulePath = path.join(__dirname, ...segments);

    return require(modulePath);
};

async function query(fields, cwd) {
    ensureAllFieldsAreAvailable(fields);

    const data = {};

    for (const name of fields) {
        const extractor = extractorForField(name);

        data[name] = await extractor(name, cwd);
    }

    return data;
};

module.exports = {
    query
};


