module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest', // Исправлено: добавлен символ '$' для правильного завершения регулярного выражения
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Исправлено: добавлены кавычки
      '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub', // Добавлено для обработки изображений
    },
  };
  