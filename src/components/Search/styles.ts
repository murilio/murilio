import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  padding: 0 5%;
  margin: 20px 0;
  border-top: solid 1px #eee;
`

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;

  cursor: pointer;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  border: solid 1px var(--color-gray);
  border-radius: 10px;

  margin: 40px 0 0 0;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
`

export { Container, Label, Input }
