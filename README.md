# what-version

Emits the version of an application or project.

~~~~
npx @vendoor/what-version -f git.hash git.branch npm.version
~~~~

Example output for the above command on the stdout:

~~~~JSON
{
  "git.hash": "7c857e22c47d2a85c7407632d0b33a498778639c",
  "git.branch": "master",
  "npm.version": "1.0.0"
}
~~~~

## CLI Usage

`what-version` has a single command line option which can be used to specify the desired fields. You may specify `-f` once:

~~~~
npx @vendoor/what-version -f npm.version git.branch
~~~~

Or you can specify `-f` multiple times:

~~~~
npx @vendoor/what-version -f npm.version -f git.branch
~~~~

## Library Usage

Alternatively, you can use `what-version` as a library. It exposes a single function, `query`:

  * `async query(fields, cwd)`
    * `fields` - The name of the queried fields (required).
    * `cwd` - The working directory of the project (required).

~~~~JavaScript
const whatVersion = require('@vendoor/what-version');

(async main() {
    const data = await whatVersion.query(['npm.version, git.hash'], '.');
})();
~~~~

## Available Fields

The following fields are available:

  * `git.branch` - The current git branch.
  * `git.hash` - The hash of the latest git commit.
  * `npm.version` - The value of the version field in the `package.json`.
