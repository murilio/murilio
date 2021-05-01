import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 360px;
  height: 100%;
  width: 100%;
  display: block;

  .cards {
    position: absolute;
    top: 0;
    left: calc(50% - 125px);
    width: 220px;
    height: 300px;
    border-radius: 18px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 18px;
    }

    &:nth-child(1) {
      top: -26px;
      left: calc(50% - 151px);
      background-color: var(--color-roxo);

      @media only screen and (min-width: 1024px) {
        left: -26px;
      }
    }

    &:nth-child(2) {
      background: linear-gradient(
        208.95deg,
        #761de7 -20.1%,
        rgba(118, 29, 231, 0) 80.59%
      );
    }

    &:nth-child(3) {
      background: linear-gradient(
        208.95deg,
        #761de7 -20.1%,
        rgba(118, 29, 231, 0) 80.59%
      );
      mix-blend-mode: screen;
    }

    &:nth-child(4) {
      top: 26px;
      left: calc(50% - 99px);
      background-image: linear-gradient(
        327.39deg,
        #f7fcff -14.94%,
        rgba(197, 244, 255, 0) 61.85%
      );

      @media only screen and (min-width: 1024px) {
        left: 26px;
      }
    }

    @media only screen and (min-width: 1024px) {
      left: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
    width: 25%;
  }
`
