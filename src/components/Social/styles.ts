import styled from 'styled-components'

// icons
import {  AiOutlineGithub } from 'react-icons/ai'
import { SiLinkedin, SiInstagram } from 'react-icons/si'

export const Container = styled.div`
  display: flex;
`

export const IconLinkedin = styled(SiLinkedin)`
  color: var(--color-gray);
  font-size: 22px;
  margin: 0 5px;

  &:hover {
    color: var(--color-dark-gray);
  }
`
export const IconGithub = styled(AiOutlineGithub)`
  color: var(--color-gray);
  font-size: 22px;
  margin: 0 5px;

  &:hover {
    color: var(--color-dark-gray);
  }
`

export const IconInstagram = styled(SiInstagram)`
  color: var(--color-gray);
  font-size: 22px;
  margin: 0 5px;

  &:hover {
    color: var(--color-dark-gray);
  }
`
