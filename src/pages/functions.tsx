import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.toUpperCase();
}

interface MyPosition {
  x: number | undefined,
  y: number | undefined,
}

// interface MyPositionWidhtDefault extends MyPosition {
//   default: string
// }

function position(): MyPosition;
// function position(a: number): MyPositionWidhtDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log('Empty:', position());
// console.log('One param:', position(42));
console.log('Two param:', position(10, 15));
console.log(add(10, 40));
console.log(toUpperCase('Сегодня я пошел гулять и нашел листочек'));

const Functions = () => (
  <Main meta={<Meta title="Enum" description="Enum - вспомогательная сущность,позволяет лучше структурировать код если присутствуют однотипные элементы" />}>
    <div>
      Functions
    </div>
  </Main>
);

export default Functions;
