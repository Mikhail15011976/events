/** @type {import('eslint').Linter.Config} */
const config = [
    {
        languageOptions: {
            globals: {
                window: 'readonly',
                document: 'readonly',
                // Добавьте другие глобальные переменные по необходимости
            },
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
            },
        },
        rules: {
            'no-unused-vars': 'warn',
            'no-console': 'off',
        },
        plugins: {
            react: require('eslint-plugin-react'),
        },
        files: ['*.jsx', '*.js'], // Применить правила к файлам .jsx и .js
    },
    // Вы можете добавить дополнительные конфигурации для других типов файлов здесь
];

module.exports = config;
