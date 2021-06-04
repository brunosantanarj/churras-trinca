import BarbecueEntity from '@core/barbecue/barbecue-entity';
import { atom } from 'recoil';

enum BarbecueStateEnum {
  barbecues = 'barbecues',
}

export const barbecueState = atom({
  key: BarbecueStateEnum.barbecues,
  default: [] as BarbecueEntity[],
});
