import React, {FC} from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../listItem';
import styles from './styles';

interface Props {
  characters: Character[]
}

const List: FC<Props> = ({characters}) => (
    <View testID="list-component" style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({item}) => <ListItem character={item} key={item.id} />}
      />
    </View>
  )

export default List
