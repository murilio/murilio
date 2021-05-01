import styled from 'styled-components'

export const ContainerCardProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  max-width: 282px;
  width: 100%;
  margin: 10px;

  @media only screen and (min-width: 768px) {
    max-width: 48%;
    margin: 10px 0px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 24%;
  }

  > img {
    max-height: 232px;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  > h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    margin: 20px 0;
    color: var(--color-branco);
  }

  > p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    margin: 0 0 20px 0;
    color: var(--color-branco);
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  > .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      width: 49%;
      height: 46px;
      border: 1px solid var(--color-contraste);
      border-radius: 10px;
      color: var(--color-branco);
      transition: all 0.2s;

      &:hover {
        background-color: var(--color-contraste);
      }
    }
  }

  > .new {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -20px;
    left: -20px;

    width: 67px;
    height: 67px;
    background-color: var(--color-contraste);
    border-radius: 50%;
    color: var(--color-branco);

    > p {
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
    }

    > .circle {
      width: 28px;
      height: 28px;
      display: block;
      border-radius: 50%;
      position: absolute;
      border: dashed 1px;
      top: -5px;
      left: -5px;
      color: var(--color-roxo);
    }
  }
`

export const ContainerCardArticles = styled(ContainerCardProjects)`
  margin: 0;
  max-width: 282px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: 32%;
  }

  > h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    color: var(--color-dark-gray);
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
