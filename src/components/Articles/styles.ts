import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  padding: 47px 5%;
  margin: 0 0 80px 0;

  @media only screen and (min-width: 2440px) {
    padding: 47px 15%;
  }

  > .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    padding: 52px 0 0;
    width: 100%;

    @media only screen and (min-width: 650px) {
      grid-template-columns: 1fr 1fr;
    }

    @media only screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .articleCard {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding-bottom: 30px;

      img {
        max-height: 254px;
        min-height: 254px;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100%;

        p {
          color: var(--color-dark-gray);
          font-size: 13px;
          text-align: left;
          margin: 5px 0 0 0;
        }

        h2 {
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
          margin: 10px 0 30px;
        }

        &::after {
          content: '';
          height: 2px;
          width: 120px;
          background-color: var(--color-contraste);
        }
      }
    }
  }
`

export const Title = styled.div`
  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 42px;
    line-height: 63px;
    color: var(--color-dark-gray);
  }

  > span {
    color: var(--color-contraste);
  }
`
