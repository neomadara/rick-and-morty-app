import { render } from '@testing-library/react-native';
import { Character } from '../../src/models/character.model';
import ListItem from '../../src/components/listItem'

describe('List Item', () => {
  it('should show a name, image, status and species information', () => {
    const character: Character = {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    }

    const { getByTestId } = render(<ListItem character={character} />)

    expect(getByTestId('list-item-name')).toBeDefined()
    expect(getByTestId('list-item-image')).toBeDefined()
    expect(getByTestId('list-item-status-specie')).toBeDefined()
  })
})
