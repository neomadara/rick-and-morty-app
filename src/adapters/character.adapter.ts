export interface ResponseAPI {
  info: object,
  results: never,
}

const charactersAdapter = (apiResult: ResponseAPI) => {
  const { results } = apiResult
  return results
}

export default charactersAdapter
