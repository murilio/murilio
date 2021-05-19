import styled from 'styled-components'

import { RiArrowRightSLine } from 'react-icons/ri'

export const Container = styled.ul`
  list-style: none;
  padding: 5px 10px;
  margin: 0 0 20px 0;
  width: max-content;
  background-color: var(--color-cinza-gelo);
  border-radius: 4px;
  display: flex;
  align-items: center;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  > li {
    display: flex;
    align-items: center;

    > .active {
      color: var(--color-contraste);
    }

    > a {
      color: var(--color-dark-gray);
      padding: 0 13px;
    }
  }
`

export const ArrowLeft = styled(RiArrowRightSLine)`
  font-size: 13px;
`
