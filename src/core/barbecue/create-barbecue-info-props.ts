import BarbecueEntity from "./barbecue-entity";

export const createBarbecueInfoProps = (props: BarbecueEntity, type: 'box'|'header') => ({
  type,
  eventName: props.name,
  eventDay: props.date,
  numberOfParticipants: props.totalOfParticipants,
  moneyCollected: props?.calculatedMoney,
});
