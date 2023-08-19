import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 100%;
  width: 240px;
  background-color: #f9f9f9;
  box-shadow: rgb(0 0 0 / 10%) 3px 5px 11px 2px;
  position: relative;

  ul {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 20px;

    list-style: none;
    padding: 0;

    li {
      font-size: 14px;

      a {
        display: flex;
        align-items: center;
        gap: 5px;

        color: var(--color-dark-gray);

        &:hover {
          color: var(--color-contraste);
        }
      }

      .active {
        color: var(--color-contraste);
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 100%;
    width: auto;
    background: transparent;
    box-shadow: none;

    flex-direction: row;

    ul {
      align-items: center;
      flex-direction: row;
      margin: 0 100px 0 0;
      height: 100%;

      li {
        display: flex;
        height: 100%;

        > a {
          font-size: 14px;
        }
      }
    }
  }
`

export const ContainerGeneral = styled.div`
  position: absolute;
  width: 100%;
  top: 0;

  .menu {
    max-height: 70px;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background: transparent;
    width: 100%;
    padding: 0 5%;
    transition: all 0.2s;
    z-index: 9;

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }

    @media only screen and (min-width: 2440px) {
      padding: 0 15%;
    }

    .openMenu {
      display: initial;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 15px;

      cursor: pointer;

      img {
        height: 28px;
        width: 40px;
        transition: all 0.2s;

        @media only screen and (min-width: 768px) {
          height: 39px;
          width: 100%;
        }
      }

      h1 {
        font-weight: 400;
        margin: 0;
        font-size: 22px;
        color: var(--color-dark-gray);
        padding: 0;
        border: 0;

        strong {
          font-weight: 800;
        }
      }
    }

    .navigation {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      position: fixed;
      top: 0;
      left: -100vw;
      height: 100vh;
      transition: all 0.3s;
      background-color: rgba(255, 255, 255, 0.3);

      @media screen and (min-width: 768px) {
        position: initial;
        display: flex;
        height: 100%;
        width: auto;
        background: transparent;
      }
    }

    .navigationOpen {
      left: 0vw;
      transition: all 0.3s;

      > .contentMenu ul {
        > li {
          font-size: 22px;

          @media only screen and (min-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }

    > .btn-menu {
      color: var(--color-roxo);
      font-size: 25px;
      cursor: pointer;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }
  }

  .scrollMenu {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    background-color: var(--color-branco);
    max-height: 40px;

    > .logo > img {
      height: 25px;
      width: 35px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    padding: 0 5%;
    min-height: 100vh;

    @media only screen and (min-width: 2440px) {
      padding: 0 15%;
    }

    .contentLeft {
      width: 100%;

      h2 {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        color: var(--color-roxo);
        margin: 0;
        padding: 0;
      }

      h1 {
        font-style: normal;
        font-weight: normal;
        line-height: clamp(35px, 10vw, 72px);
        font-size: clamp(35px, 10vw, 64px);
        color: var(--color-dark-gray);
        color: var(--color-dark-gray);
        margin: 0;
        padding: 0;
        border: 0;
      }

      > span {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: var(--color-soft-roxo);

        &::after {
          content: '';
          display: block;
          height: 2px;
          width: 120px;
          margin-top: 10px;
          background: var(--color-contraste);
        }
      }

      @media only screen and (min-width: 768px) {
        max-width: 602px;
      }
    }

    .contentRight {
      display: none;
      width: auto;

      img {
        width: 100%;
        height: 500px;

        border-radius: 20px;
        object-fit: cover;
      }

      @media only screen and (min-width: 768px) {
        display: initial;

        max-width: 600px;
        width: 100%;
      }
    }
  }
`
