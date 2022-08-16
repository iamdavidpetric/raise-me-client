import { ImOffice } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import { GiClothes } from 'react-icons/gi';
import {
  MdBackpack,
  MdComputer,
  MdOtherHouses,
  MdOutlineHeadset,
  MdOutlineYard
} from 'react-icons/md';

export const categories = [
  { name: 'audio', icon: <MdOutlineHeadset size='5rem' /> },
  { name: 'backpacks', icon: <MdBackpack size='5rem' /> },
  { name: 'cars', icon: <AiFillCar size='5rem' /> },
  { name: 'clothes', icon: <GiClothes size='5rem' /> },
  { name: 'garden', icon: <MdOutlineYard size='5rem' /> },
  { name: 'house', icon: <MdOtherHouses size='5rem' /> },
  { name: 'office', icon: <ImOffice size='5rem' /> },
  { name: 'tech', icon: <MdComputer size='5rem' /> }
];

export const teamMembersLabels = [
  { name: 'Project Leader', avatar: 'Project Leader Avatar URL' },
  { name: 'First Member', avatar: 'First Member Avatar URL' },
  { name: 'Second Member', avatar: 'Second Member Avatar URL' },
  { name: 'Third Member', avatar: 'Third Member Avatar URL' },
  { name: 'Forth Member', avatar: 'Forth Member Avatar URL' },
  { name: 'Fifth Member', avatar: 'Fifth Member Avatar URL' },
  { name: 'Sixth Member', avatar: 'Sixth Member Avatar URL' }
];
