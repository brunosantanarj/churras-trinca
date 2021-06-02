import styled from 'styled-components';

const classes = {
  box: {
    container: 'w-full',
    eventName: 'raleway font-bold text-xl mt-2',
    infos: 'flex row justify-between mt-12'
  },
  header: {
    container: 'w-full flex row justify-between items-center',
    eventName: 'raleway font-bold text-3xl mt-4',
    infos: ''
  }
}

const getClassName = (type: 'box'|'header', element: 'container'|'eventName'|'infos') =>
  classes[type][element]

export const Container = styled.div.attrs((props) => ({
  className: getClassName(props.theme.type, 'container')
}))``;

export const EventDate = styled.time.attrs({
  className: 'raleway font-extrabold text-3xl'
})``;

export const EventName = styled.h4.attrs((props) => ({
  className: getClassName(props.theme.type, 'eventName')
}))`
  color: rgba(0, 0, 0, 0.8);
`;

export const Infos = styled.div.attrs((props) => ({
  className: getClassName(props.theme.type, 'infos')
}))``;

export const WrapperPeoplesAndMoney = styled.div.attrs({
  className: 'flex row items-center'
})``

export const TextInfo = styled.span.attrs({
  className: 'raleway font-medium text-2xl ml-2'
})``;