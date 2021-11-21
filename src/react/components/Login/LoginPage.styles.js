import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;
  }

  @media screen and (max-width: 1050px){
    .container {
      grid-gap: 5rem;
    }
  }

  @media screen and (max-width: 900px){
    .container {
      grid-template-columns: 1fr;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & img {
    width: 500px;
  }

  @media screen and (max-width: 1000px) {
    & img{
      width: 400px;
    }
  }

  @media screen and (max-width: 900px){
    & {
      display: none;
    }
  }
`

export const WaveImage = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  z-index: -1;

  @media screen and (max-width: 900px){
    & {
      display: none;
    }
  }
`

export const LoginContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 900px){
    & {
      justify-content: center;
    }
  }
`