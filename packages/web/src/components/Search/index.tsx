import { Container, Input, Label } from './styles'

interface SearchProps {
  handleSearch: (text: string) => void
}

const Search = ({ handleSearch }: SearchProps) => {
  return (
    <Container>
      <Label>
        <span className="material-icons-outlined">search</span>
        <Input
          id="search"
          autoComplete="off"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Label>
    </Container>
  )
}

export { Search }
