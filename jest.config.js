/**
 * testEnvironment: 'jsdom'                                     Informar que o test serpa feito no browser, para o jest simular o DOM
 * testPathIgnorePatterns: ['/node_modules', '/.next']          Ignorar paths
 * collectCoverage: true                                        Teste de cobertura, para saber se está cobrindo tudo
 * collectCoverageFrom: ['src/**\/*.ts(x)']                     Onde será feito o teste de cobertura, no caso na pasta sec, em arquivos .ts ou .tsx
 * setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts</rootDir>']   Arquivo para carregar configurações antes dos tests
 */

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
