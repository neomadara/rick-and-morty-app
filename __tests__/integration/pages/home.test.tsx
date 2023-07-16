import { render } from '@testing-library/react-native';
import Home from '../../../src/pages/Home';
import useCharacter from '../../../src/hooks/useCharacter';

const mockUseCharacter = useCharacter as jest.Mock<any>

jest.mock('../../../src/hooks/useCharacter')

describe('Home', () => {
  beforeEach(() => {
    mockUseCharacter.mockImplementation(() => ({ isLoading: true }))
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Should render an loading text when the application is loading', () => {
    const { getByText } = render(<Home />)
    expect(getByText(/loading.../i)).toBeDefined()
  })
  test('Should render a list of characters when the application start', () => {
    const API: any = {
      info: {},
      results: [
        {
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
        },
        {
          "id": 2,
          "name": "Morty Smith",
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
          "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
          "episode": [
            "https://rickandmortyapi.com/api/episode/1",
            "https://rickandmortyapi.com/api/episode/2",
            // ...
          ],
          "url": "https://rickandmortyapi.com/api/character/2",
          "created": "2017-11-04T18:50:21.651Z"
        }
      ]
    }
    mockUseCharacter.mockImplementation(() => ({ isLoading: false, data: API}))

    const { getByTestId, getAllByTestId } = render(<Home />)

    expect(getByTestId('list-component')).toBeDefined()
    expect(getAllByTestId('item-component').length).toBe(2)
  })
  // test('Should render more results when the user get the bottom of list')
  // test('Should search a character when the user use the search input')
  // test('Should show a detail view of a character if the user tap a result')
})
