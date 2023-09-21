import { Text } from '@react-native-material/core';
import React from 'react';
import { View } from 'react-native';
import List from '../../components/list';
import useCharacter from '../../hooks/useCharacter';
import charactersAdapter from '../../adapters/character.adapter';
import styles from './styles';

const Home = () : JSX.Element => {
  const { isLoading, isError, data } = useCharacter()

  if (isLoading) return <Text>loading...</Text>

  if (isError) {
    return <Text>ops! we have a problem</Text>
  }

  const characters:Character[] = charactersAdapter(data)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.container}>The Rick and Morty API</Text>
      </View>
      <List characters={characters} />
    </>
  )
}

export default Home
