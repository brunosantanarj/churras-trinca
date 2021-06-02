import { Colors } from '@presentation/ui';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.allFeatured && `background-color: ${Colors.primary};`}
`;

export const Header = styled.header.attrs({
  className: 'flex justify-center items-center'
})`
  background-image: url('/images/churras-background.svg');
  height: 334px;

  ${({ theme }) => theme.allFeatured && `
    position: relative;

    &:before {
      z-index: 0;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: ${Colors.primary};
      mask-image: -webkit-gradient(linear, left 100%, left 60%,
        from(rgba(255,216,54,1)), to(rgba(0,0,0,0)));
    }
  `}
`;

export const Footer = styled.footer.attrs({
  className: 'py-8 flex justify-center'
})``;

export const Title = styled.h1.attrs({
  className: 'font-raleway font-extrabold text-4xl z-10'
})``;
