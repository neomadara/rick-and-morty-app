import React, {FC} from 'react';
import { View } from 'react-native';
import { Character } from '../../models/character.model';
import ListItem from '../listItem';

interface Props {
  characters: Character[]
}

const List: FC<Props> = ({characters}) => (
    <View testID="list-component">
      {characters.map((character) => (
          <ListItem character={character} key={character.id} />
        ))}
    </View>
  )

export default List
