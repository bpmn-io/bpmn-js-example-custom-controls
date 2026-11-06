import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    'public'
  ],
  build: [
    '*.js'
  ],
  app: [
    'app/**/*.js'
  ]
};

export default [
  {
    ignores: files.ignored
  },
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: files.build,
      languageOptions: {
        ...config.languageOptions,
        sourceType: 'commonjs'
      }
    };
  }),
  ...bpmnIoPlugin.configs.browser.map(config => {
    return {
      ...config,
      files: files.app
    };
  }),
  ...bpmnIoPlugin.configs.esm.map(config => {
    return {
      ...config,
      files: files.app
    };
  })
];
