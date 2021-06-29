import styled, { css } from 'styled-components'

interface ButtonProps {
  show: boolean;
}

export const Container = styled.header`
  height: 100vh;
  width: 100%;
  position: relative;

  .backgroundColor {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-branco);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .colorWhite {
      width: 30%;
      height: 100%;
      background-color: var(--color-branco);
    }

    .colorGelo {
      width: 70%;
      height: 100%;
      background-color: var(--color-cinza-gelo);
      border-radius: 18px 0px 0px 18px;
    }
  }

  .arrow {
    position: absolute;
    bottom: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: positionAnimation 1s infinite;

    @keyframes positionAnimation {
      0%, 100% {
        bottom: 80px;
      }
      50% {
        bottom: 70px;
      }
    }
  }
`

export const ArrowContent = styled.div`
  background-color: var(--color-contraste-dark);
  color: var(--color-gray);
  border-radius: 30px;
  cursor: pointer;
  padding: 10px;
  height: 70px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: boxShadowAnimation 1s infinite;

  @keyframes boxShadowAnimation {
    0%, 100% {
      box-shadow: 0px 0px 20px 0px var(--color-gray);
    }
    50% {
      box-shadow: 0px 0px 20px 0px var(--color-soft-roxo);
    }
  }

  @media only screen and (min-width: 768px) {
    height: 60px;
    width: 40px;
  }
`

export const ScrollButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: var(--color-contraste);
  color: var(--color-cinza-gelo);
  border: 0;
  height: 35px;
  width: 35px;
  z-index: 9;
  border-radius: 8px;
  box-shadow: 1px 1px 5px var(--color-gray);
  opacity: 0;
  transition: all .3s;
  cursor: pointer;

  ${props => props.show && css`
    opacity: 1;
  `}
`
