import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version}`;
  }
}

// Свойство readonly можно перезаписывать только внутри конструктора
class Car {
  readonly model: string;

  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}
class Car1 {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {}
}

// Модификаторы -  3 вида  protected public private
// Protected - предоставленные поля класса могут быть использованы внутри класса а так же всем наследуемым
// Private - доступны только в том классе в котором были определенны
// Public - достуны везде

class Animal {
  protected voice: string = '';

  public color:string = 'black';

  // private go() {
  //   console.log('Go');
  // }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();

// abstract class Component {
//   abstract render(): void;
//
//   abstract info(): string;
// }

// class AppComponent extends Component {
//   render(): void {
//     console.log('Component render');
//   }
//
//   info(): string {
//     return 'Component render';
//   }
// }
console.log(TypeScript);
console.log(Car);
console.log(Car1);
console.log(cat);
// console.log(AppComponent);

const Classes = () => (
  <Main meta={<Meta title="Enum" description="Enum - вспомогательная сущность,позволяет лучше структурировать код если присутствуют однотипные элементы" />}>
    <div>
      Classes
    </div>
  </Main>
);

export default Classes;
