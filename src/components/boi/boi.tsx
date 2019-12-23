import * as React from 'react';

import boi from '../../assets/images/boiiiii.png';
import cat from '../../assets/images/cat.png';
import house from '../../assets/images/house.png';
import man from '../../assets/images/man.png';
import minecraft from '../../assets/images/minecraft.png';

import { randomBetween } from '../../utils/utils';

import './boi.styles.scss';

enum Pic {
    cat = 'cat',
    house = 'house',
    man = 'man',
    minecraft = 'minecraft'
}

const pics: Array<{ picName: Pic; pic: string }> = [
  { picName: Pic.cat, pic: cat },
  { picName: Pic.house, pic: house },
  { picName: Pic.man, pic: man },
  { picName: Pic.minecraft, pic: minecraft },
];

const getPicture = (defaultPic?: Pic) => {
  return defaultPic ? pics[defaultPic].pic : pics[randomBetween(0, pics.length)].pic;
};

interface IBoiProps {
    defaultPic?: Pic;
}

const Boi: React.FC<IBoiProps> = ({ defaultPic }: IBoiProps) => {

  const [currentPic, setPicture] = React.useState(getPicture(defaultPic));

  React.useEffect(() => {
    if (!defaultPic) {
      setPicture(getPicture());
    }
  }, []);

  return (
    <div id="boi-background">
      <img className="cat" alt="cat" src={currentPic}></img>
      <img className="boi" alt="boi" src={boi}></img>
    </div>
  );
};

export default React.memo(Boi);
