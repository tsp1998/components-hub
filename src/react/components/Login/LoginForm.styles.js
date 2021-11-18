import styled from 'styled-components';

export const LoginFormContainer = styled.form`
  width: 360px;

  @media screen and (max-width: 1000px) {
    & {
      width: 290px;
    }
  }
`

export const AvatarImage = styled.img`
  height: 100px;
`

export const FormHeading = styled.h2`
  margin: 15px 0;
  color: #333;
  text-transform: uppercase;
  font-size: 2.9rem;

  @media screen and (max-width: 1000px) {
    & {
      font-size: 2.4rem;
      margin: 8px 0;
    }
  }
`

export const FormGroup = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;

  & > div {
    position: relative;
    height: 45px;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 0%;
    height: 2px;
    background-color: #38d39f;
    transition: .4s;
  }

  &:before{
    right: 50%;
  }

  &:after{
    left: 50%;
  }

  &.focus:before, &.focus:after{
    width: 50%;
  }

  .one {
    margin-top: 0;
  }
  .pass {
    margin-bottom: 4px;
  }
`

export const IconContainer = styled.div`
  color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.i`
  transition: .3s;
  color: #38d39f;
`

export const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
  font-family: 'poppins', sans-serif;
`

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  background-size: 200%;
  font-size: 1.2rem;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  margin: 1rem 0;
  cursor: pointer;
  transition: .5s;

  &:hover{
    background-position: right;
  }
`
