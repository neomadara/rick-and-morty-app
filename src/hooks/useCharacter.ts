import { useQuery } from '@tanstack/react-query';
import axios from 'axios/index';
import { ResponseAPI } from '../adapters/character.adapter';

const useCharacter = () => useQuery<ResponseAPI>(["characters"], () =>
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => res.data)
  , {retry: false})

export default useCharacter
