import { Text } from '@react-native-material/core';
import React from 'react';
import List from '../../components/list';
import useCharacter from '../../hooks/useCharacter';
import charactersAdapter from '../../adapters/character.adapter';
import { Character } from '../../models/character.model';

const Home = () => {
  const { isLoading, isError, data } = useCharacter()

  if (isLoading) return <Text>loading...</Text>

  if (isError) {
    return <Text>ops! we have a problem</Text>
  }

  const characters:Character[] = charactersAdapter(data)

  return <List characters={characters} />
}

export default Home
