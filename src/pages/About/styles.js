import styled from 'styled-components';

const Content = styled.section`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: ${(props) => props.theme.size.base};
  margin: auto;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.lg}) {
    width: auto;
    padding-inline-start: 2rem;
    padding-inline-end: 2rem;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-block-end: 3rem;
  }
`;

const Images = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-start: 5rem;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-block-start: -2rem;
    margin-block-end: 3rem;
    margin-inline-start: 0;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    transform: scale(0.7);
    margin-block-start: -4rem;
    margin-block-end: -2rem;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 22rem;
  height: 22rem;
`;

export { Content, Images, Image };
