import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

// Создание типа для обьектов или класов где указываются какие поля функции или элементы должны присутсвовать
// Ни во что не компелируются,

interface Rect {
  readonly id: string // readonly определяет поля как только для чтения
  color?: string // ? определяет не обязательность этого поля
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 10,
    height: 20,
  },
  color: '#ccc',
};

// Изменение внутринего состояния обькта или массива допускается для определения в константу
const rect2: Rect = {
  id: '213123',
  size: {
    width: 20,
    height: 30,
  },
  color: '#000',
};
rect2.color = 'black';

// Строгое приведение к типу Rect
// Альтернативная старая запись
const rect3 = {} as Rect;
// const rect4 = <Rect>{};

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '12334',
  size: {
    width: 10,
    height: 45,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date
  setTime(date: Date): void
}

// implements наследует родителя но ожидает строгой передачи данных
// относительно переданных в нем данных и их типов а иначе выдает ошибку
// extend наследует все и поэтому ошибки при вызове не будет
class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date) {
    this.time = date;
  }
}

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px',
};

console.log(rect1);
console.log(rect2);
console.log(rect3);
console.log(rect5);
console.log(Clock);
console.log(css);

const Interfaces = () => (
  <Main meta={<Meta title="Интерфейсы" description="интерфейсы ts" />}>
    <div>
      Интерфейсы
    </div>
  </Main>
);

export default Interfaces;
