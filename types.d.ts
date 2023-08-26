interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: object
  image: string
  episode: string[]
  url: string
  created: string
}

interface Origin {
  name: string
}

