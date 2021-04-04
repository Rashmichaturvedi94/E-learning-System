// eslint-disable-next-line import/no-extraneous-dependencies
const changeCase = require('change-case');

const initialName = process.argv[4];

module.exports = {
  prompt: async ({ prompter: { prompt } }) => {
    const { name } = await prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What’s the name of the component you want to create?',
        skip: !!initialName,
        result: (name) => changeCase.pascal(name),
        initial: changeCase.pascal(initialName),
        validate: (name) => name.length > 2,
      },
    ]);

    const { type } = await prompt([
      {
        type: 'select',
        name: 'type',
        message: 'More specifically, what do you want to create?',
        choices: ['component', 'container'],
      },
    ]);

    const dirname = { component: 'components', container: 'containers' }[type];

    return {
      name,
      type,
      title: `${dirname}/${name}`,
      path: `${dirname}/${name}`,
      root: './src',
    };
  },
};
