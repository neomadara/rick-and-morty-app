import React, {FC} from 'react'
import { ImageBackground, View } from 'react-native';
import { Text } from '@react-native-material/core';
import styles from './styles';

interface Props {
  character: Character
}

const ListItem: FC<Props> = ({character}) => (
  <View testID="item-component" style={styles.container}>
    <View style={styles.imageContainer}>
      <ImageBackground source={{uri: character.image}} resizeMode="cover" style={styles.image} />
    </View>
    <View style={styles.information}>
      <Text testID="list-item-name" style={[styles.whiteColor, styles.title]}>{character.name}</Text>
      <Text testID="list-item-status-specie" style={[styles.whiteColor, styles.subTitle, styles.bottomPadding]}>
        {`${character.status  } - ${ character.species}`}
      </Text>
      <Text style={[styles.greyColor, styles.subTitle]}>{character.gender}</Text>
      <Text style={[styles.greyColor, styles.subTitle]}>{character.origin.name}</Text>
    </View>
  </View>
)

export default ListItem
