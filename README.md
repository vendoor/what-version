# what-version

Emits the version of an application or project.

~~~~
npx @vendoor/what-version -f git.hash git.branch npm.version
~~~~

## Usage

`what-version` has a single command line option which can be used to specify the desired fields. The available fields are the following:

  * `git.branch` - The current git branch.
  * `git.hash` - The hash of the latest git commit.
  * `npm.version` - The value of the version field in the `package.json`.

### Examples

`-f` can be specified once or multiple times:

~~~~
npx @vendoor/what-version -f npm.version git.branch
~~~~

~~~~
npx @vendoor/what-version -f npm.version -f git.branch
~~~~
