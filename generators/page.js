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
        path: '../src/components/Molecules/{{pascalCase name}}/{{pascalCase name}}Form/index.tsx',
        templateFile: 'pageTemplates/form/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/Molecules/{{pascalCase name}}/{{pascalCase name}}Form/styles.ts',
        templateFile: 'pageTemplates/form/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/Molecules/{{pascalCase name}}/{{pascalCase name}}ListHeader/index.tsx',
        templateFile: 'pageTemplates/list/listheader/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/Molecules/{{pascalCase name}}/{{pascalCase name}}ListHeader/styles.ts',
        templateFile: 'pageTemplates/list/listheader/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/Molecules/{{pascalCase name}}/{{pascalCase name}}ListItem/index.tsx',
        templateFile: 'pageTemplates/list/listitem/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/Molecules/{{pascalCase name}}/{{pascalCase name}}ListItem/styles.ts',
        templateFile: 'pageTemplates/list/listitem/styles.ts.hbs'
      },

      {
        type: 'add',
        path: '../src/components/Templates/{{pascalCase name}}/{{pascalCase name}}List/index.tsx',
        templateFile: 'pageTemplates/templates/list/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/Templates/{{pascalCase name}}/{{pascalCase name}}List/utils.ts',
        templateFile: 'pageTemplates/templates/list/utils.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/Templates/{{pascalCase name}}/{{pascalCase name}}List/styles.ts',
        templateFile: 'pageTemplates/templates/list/styles.ts.hbs'
      },

      {
        type: 'add',
        path: '../src/components/Templates/{{pascalCase name}}/{{pascalCase name}}Page/index.tsx',
        templateFile: 'pageTemplates/templates/page/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/Templates/{{pascalCase name}}/{{pascalCase name}}Page/styles.ts',
        templateFile: 'pageTemplates/templates/page/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/contexts/{{lowerCase name}}.tsx',
        templateFile: 'pageTemplates/context.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/contexts/{{lowerCase name}}s.tsx',
        templateFile: 'pageTemplates/contextlist.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/services/{{lowerCase name}}s.ts',
        templateFile: 'pageTemplates/service.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/types/{{lowerCase name}}s.ts',
        templateFile: 'pageTemplates/type.ts.hbs'
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
