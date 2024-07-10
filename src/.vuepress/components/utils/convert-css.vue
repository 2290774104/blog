<template>
  <div class="convert-css">
    <el-input
      class="input-wrap"
      v-model="inputText"
      type="textarea"
      resize="none"
    />
    <div class="operation-wrap">
      <el-select style="width: 240px" v-model="outputType">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button @click="handleConvert">转换</el-button>
    </div>
    <el-input
      class="input-wrap"
      v-model="outputText"
      type="textarea"
      resize="none"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

export type CssType = 'scss' | 'sass' | 'stylus';

interface IDeclaration {
  source?: string;
  property?: string;
  value?: string;
}

interface IElement {
  source?: string;
  selector?: string;
  children?: IElement;
  declarations?: IDeclaration[];
  selectorParts?: string[];
}

const convertCssTo = (css: string, type: CssType) => {
  let openingBracket = '',
    closingBracket = '',
    semiColumn = '',
    eol = '';
  const indentS = '\t';
  'scss' == type
    ? ((eol = ';'),
      (openingBracket = '{'),
      (closingBracket = '}'),
      (semiColumn = ':'))
    : 'sass' == type
    ? ((eol = ' '),
      (openingBracket = ''),
      (closingBracket = ''),
      (semiColumn = ':'))
    : 'stylus' == type &&
      ((eol = ''),
      (openingBracket = ''),
      (closingBracket = ''),
      (semiColumn = ''));

  const parseCSS = (css: string) => {
    const base: IElement = { children: {} };
    return (
      (css = css.replace(/\/\*[\s\S]*?\*\//gm, '')).replace(
        /([^{]+)\{([^}]+)\}/g,
        function (original: string, selector: string, style: string) {
          const reference: IElement = {};
          (reference.source = original),
            (reference.selector = tableReplace(selector));
          let element: IElement = base;
          if (reference.selector.indexOf(',') > -1) {
            element.children![selector] ||
              (element.children![selector] = {
                children: {},
                declarations: [],
              }),
              (element = element.children![selector]);
          } else {
            (reference.selector = reference.selector.replace(
              /\s*([>\+~])\s*/g,
              ' &$1'
            )),
              (reference.selector = reference.selector.replace(
                /(\w)([:\.])/g,
                '$1 &$2'
              )),
              (reference.selectorParts = reference.selector.split(/[\s]+/));
            for (let n = 0; n < reference.selectorParts.length; n++) {
              (selector = (selector = (selector =
                reference.selectorParts[n]).replace(/&(.)/g, '& $1 ')).replace(
                /& ([:\.]) /g,
                '&$1'
              )),
                element.children![selector] ||
                  (element.children![selector] = {
                    children: {},
                    declarations: [],
                  });
              element = element.children![selector];
            }
          }
          style.replace(
            /([^:;]+):([^;]+)/g,
            function (source: string, property: string, value: string) {
              const declarations = {
                source,
                property: tableReplace(property),
                value: tableReplace(value),
              };
              element.declarations!.push(declarations);
              return '';
            }
          );
          return '';
        }
      ),
      exportObject(base)
    );
  };

  let depth = 0;

  const exportObject = (element: IElement) => {
    let text = '';
    return (
      Object.keys(element.children!).forEach((selector) => {
        const s = element.children![selector];
        (text += `${getIndent()}${selector} ${openingBracket}\n`), depth++;
        for (let i = 0; i < s.declarations.length; i++) {
          const declaration = s.declarations[i];
          text += `${getIndent()}${declaration.property}${semiColumn} ${
            declaration.value
          }${eol}\n`;
        }
        (text += exportObject(s)),
          depth--,
          (text += `${getIndent()}${closingBracket}\n`);
      }),
      (text = text.replace(/^\s*$[\n\r]{1,}/gm, ''))
    );
  };

  const tableReplace = (str: string) => {
    return str.replace(/\t+/, ' ').trim();
  };

  const getIndent = () => {
    for (var e = '', t = 0; t < depth; t++) e += indentS;
    return e;
  };

  return parseCSS(css);
};

const inputText = ref('');

const outputText = ref('');

const outputType = ref<CssType>('scss')

const options = [
  {
    value: 'scss',
    label: 'scss',
  },
  {
    value: 'sass',
    label: 'sass',
  },
  {
    value: 'stylus',
    label: 'stylus',
  },
];

const handleConvert = () => {
  outputText.value = convertCssTo(inputText.value, outputType.value);
};
</script>

<style lang="scss" scoped>
.convert-css {
  .input-wrap {
    margin-top: 3px;
    height: 350px;
    border-radius: 6px;

    :deep(textarea) {
      height: 100%;
      border: 0 none;
    }
  }

  .operation-wrap {
    margin: 15px 0;
  }

  .el-button {
    margin-left: 10px;
  }
}
</style>
