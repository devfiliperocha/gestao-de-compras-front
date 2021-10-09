module.exports = function (plop) {
  // component generator
  plop.setGenerator('component', {
    description: 'application page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'page name please'
      },

      {
        type: 'input',
        name: 'singularLabel',
        message: 'page singularLabel please'
      },

      {
        type: 'input',
        name: 'pluralLabel',
        message: 'page pluralLabel please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/Form/index.tsx',
        templateFile: 'pageTemplates/form/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/Form/styles.ts',
        templateFile: 'pageTemplates/form/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/ListHeader/index.tsx',
        templateFile: 'pageTemplates/list/listheader/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/ListHeader/styles.ts',
        templateFile: 'pageTemplates/list/listheader/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/ListItem/index.tsx',
        templateFile: 'pageTemplates/list/listitem/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/ListItem/styles.ts',
        templateFile: 'pageTemplates/list/listitem/styles.ts.hbs'
      },

      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/List/index.tsx',
        templateFile: 'pageTemplates/list/list/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/List/utils.ts',
        templateFile: 'pageTemplates/list/list/utils.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/List/styles.ts',
        templateFile: 'pageTemplates/list/list/styles.ts.hbs'
      },

      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/Page/index.tsx',
        templateFile: 'pageTemplates/page/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/components/Page/styles.ts',
        templateFile: 'pageTemplates/page/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/context/{{lowerCase name}}.tsx',
        templateFile: 'pageTemplates/context.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/context/{{lowerCase name}}s.tsx',
        templateFile: 'pageTemplates/contextlist.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/service/{{lowerCase name}}s.ts',
        templateFile: 'pageTemplates/service.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/types/{{lowerCase name}}s.ts',
        templateFile: 'pageTemplates/type.ts.hbs'
      },

      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/{{lowerCase name}}.tsx',
        templateFile: 'pageTemplates/reg.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/Menus/{{pascalCase name}}/{{lowerCase name}}s.tsx',
        templateFile: 'pageTemplates/main.tsx.hbs'
      },

      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/index.tsx',
        templateFile: 'pageTemplates/pages/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{lowerCase name}}/[id].tsx',
        templateFile: 'pageTemplates/pages/id.tsx.hbs'
      }
    ]
  })
}
