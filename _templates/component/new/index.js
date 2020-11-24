const i = require('change-case');

module.exports = {
    prompt: async ({ prompter }) => {

        let { name } = await prompter.prompt({ type: 'input', name: 'name', message: 'Component name:' });

        name = i.pascalCase(name);

        const componentDir = `src/components/${name}`;

        return {
            name,
            componentDir,
        };
    },
};
