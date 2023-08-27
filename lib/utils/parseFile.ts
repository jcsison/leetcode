import { ListNode, TreeNode, toListNode, toTreeNode } from '.';

interface ParseFileOptions {
  fileName?: string;
  list?: boolean | boolean[];
  params?: number;
  tree?: boolean | boolean[];
}

export const parseFile = (
  fn?: (...restParams: any[]) => void,
  options?: ParseFileOptions,
) => {
  const runFunction = async (...restParams: unknown[]) => {
    const asyncFn = () => new Promise(resolve => resolve(fn?.(...restParams)));

    const startTime = performance.now();
    const result = await asyncFn();
    const runtime = performance.now() - startTime;

    console.log('result: ', result, `\nruntime: ${runtime} ms\n`);
  };

  const handleLine = async (line: unknown) => {
    if (line === null || line === undefined) {
      return;
    }

    let restParams: unknown[] = [line];

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
            const listNode = toListNode(restParams[i] as ListNode<unknown>);
            restParams[i] = listNode;
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
            const treeNode = toTreeNode(restParams[i] as TreeNode<unknown>);
            restParams[i] = treeNode;
          }
        });
      }
    }

    await runFunction(...restParams);
  };

  const processInputFile = (data: string) => {
    let input = data
      .trim()
      .split('\n')
      .map(line => {
        if (line === '[]') {
          return [];
        } else if (line.length > 0) {
          if ((line.match(/\[.*\]/g)?.length ?? 0) > 0) {
            return JSON.parse(line);
          } else if ((line.match(/\".*\"/g)?.length ?? 0) > 0) {
            return line.replace(/['"]+/g, '');
          } else if (!isNaN(Number(line))) {
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

  Bun.file(fileName).text().then(processInputFile);
};
