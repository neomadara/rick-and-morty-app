import React, {FC} from 'react'
import { Character } from '../../models/character.model';
import { Image, View } from 'react-native';
import { Text } from '@react-native-material/core';

interface Props {
  character: Character
}

const ListItem: FC<Props> = ({character}) => (
  <View testID="item-component">
    <Text testID="list-item-name">{character.name}</Text>
    <Image testID="list-item-image" source={{uri: character.image}} />
    <Text testID="list-item-status-specie">{`${character.status  } - ${ character.species}`}</Text>
  </View>
)

export default ListItem
