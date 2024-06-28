import { Plugin } from 'vuepress';
import mdContainer from 'markdown-it-container';

export const previewDemo = (options = {}): Plugin => {
  options = Object.assign({});

  return (app) => {
    return {
      name: 'vuepress-plugin-preview-demo',
      extendsMarkdown: (md) => {
        md.use(mdContainer, 'demo', {
          validate(params) {
            return params.trim().match(/^demo\s*(.*)$/);
          },
          render(tokens, idx) {
            if (tokens[idx].nesting === 1) {
              return `
                <PreviewComponents>
              `;
            }
            return `</PreviewComponents>`;
          },
        });
      },
      //   extendsMarkdown
    };
  };
};
