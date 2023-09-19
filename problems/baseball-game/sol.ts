import { checkSolution } from '~/lib';

type Operation = '+' | 'D' | 'C' | (string & {});

function calPoints(operations: string[]): number {
  const scoreStack: number[] = [];

  for (const operation of operations) {
    switch (operation as Operation) {
      case '+':
        scoreStack.push(
          scoreStack[scoreStack.length - 1] + scoreStack[scoreStack.length - 2],
        );
        break;
      case 'C':
        scoreStack.pop();
        break;
      case 'D':
        scoreStack.push(scoreStack[scoreStack.length - 1] * 2);
        break;
      default:
        scoreStack.push(Number(operation));
    }
  }

  return scoreStack.reduce((acc, v) => acc + v, 0);
}

checkSolution(calPoints);
