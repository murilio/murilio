import styled from 'styled-components'

export const Container = styled.ul`
  list-style: none;
  padding: 5px 10px;
  margin: 0 0 20px 0;
  background-color: var(--color-cinza-gelo);
  border-radius: 4px;
  width: 100%;
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 16px;
    }

    > .active {
      color: var(--color-contraste);
    }

    > a {
      color: var(--color-dark-gray);
      padding: 0 13px;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`
