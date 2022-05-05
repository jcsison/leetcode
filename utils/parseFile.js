import { toListNode } from './toListNode.js';
import { toTreeNode } from './toTreeNode.js';

export const parseFile = (fn, options) => {
  const runFunction = async (...restParams) => {
    const asyncFn = () => new Promise(resolve => resolve(fn(...restParams)));

    const startTime = performance.now();
    const result = await asyncFn();
    const runtime = performance.now() - startTime;

    console.log('result: ', result, `\nruntime: ${runtime} ms\n`);
  };

  const handleLine = async line => {
    if (line !== undefined) {
      let restParams = [line];

      if (options?.params && Array.isArray(line)) {
        restParams = [...line];
      }

      if (options?.list) {
        if (options.list === true) {
          options.list = [true];
        }

        if (Array.isArray(options?.list)) {
          options.list.forEach((bool, i) => {
            if (bool && i < restParams.length) {
              restParams[i] = toListNode(restParams[i]);
            }
          });
        }
      }

      if (options?.tree) {
        if (options.tree === true) {
          options.tree = [true];
        }

        if (Array.isArray(options?.tree)) {
          options.tree.forEach((bool, i) => {
            if (bool && i < restParams.length) {
              restParams[i] = toTreeNode(restParams[i]);
            }
          });
        }
      }

      await runFunction(...restParams);
    }
  };

  const processInputFile = data => {
    let input = data
      .trim()
      .split('\n')
      .map(line => {
        if (line === '[]') {
          return [];
        } else if (line?.length > 0) {
          if (line.match(/\[.*\]/g)?.length > 0) {
            return JSON.parse(line);
          } else if (line.match(/\".*\"/g)?.length > 0) {
            return line.replace(/['"]+/g, '');
          } else if (!isNaN(line)) {
            return Number(line);
          } else {
            return line;
          }
        }
      });

    if (options?.params) {
      const resizedInput = [];

      while (input.length) {
        resizedInput.push(input.splice(0, options.params));
      }

      input = resizedInput;
    }

    if (input) {
      input.forEach(handleLine);
    }
  };

  const fileName = options?.fileName ?? 'in1';

  Deno.readTextFile(fileName).then(processInputFile);
};
