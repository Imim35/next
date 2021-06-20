import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const str: string = 'Hello world';
const isFetching: boolean = true;
const isLoading: boolean = false;
const int: number = 42;
const numberArray: number[] = [1, 1, 2, 3, 5];
// Дженерик тип(указание из чего состоит массив)
const numberArray2: Array<number> = [1, 1, 2, 3, 5];
const words: string[] = ['Hello', 'test'];

// Tuple
const contact: [string, number] = ['Genia', 123123]; // Определение нескольких типо внутри массива

// Any - принятние любого типа данных
let virable: any = 42;
virable = [];

// Значение void говорит о том что функця ничего не вернет
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName('name');

// Never - бесконечная функция либо возвращает ошибку и не заканчивает свое выполнение либо если она
// постоянно что либо делать

// function throwError(message: string): never {
//   throw new Error(message);
// }
//
// function infinite(): never {
//   while (true) {
//     console.log('infinity');
//   }
// }

// Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id: ID = 1234;
const id2: ID = '12334';

// type SomeType = string | null | undefined;

console.log(str);
console.log(isFetching);
console.log(isLoading);
console.log(int);
console.log(numberArray);
console.log(numberArray2);
console.log(words);
console.log(contact);
console.log(virable);
console.log(login);
console.log(id);
console.log(id2);

const Types = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div>
      123
    </div>
  </Main>
);

export default Types;
