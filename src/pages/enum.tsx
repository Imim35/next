import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

enum MemberShip {
  Simple,
  Standart,
  Premium,
}

const membership = MemberShip.Standart;
const membershipReverse = MemberShip[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  vk = 'VK',
  facebook = 'Facebook',
  instagramm = 'Instagramm'
}
const social = SocialMedia.instagramm;
console.log(social);

const Enum = () => (
  <Main meta={<Meta title="Enum" description="Enum - вспомогательная сущность,позволяет лучше структурировать код если присутствуют однотипные элементы" />}>
    <div>
      Enum
    </div>
  </Main>
);

export default Enum;
