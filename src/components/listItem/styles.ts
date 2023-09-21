import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    borderRadius: 6,
    backgroundColor: '#3C3E44',
    flexDirection: 'row',
    marginBottom: 8,
    width: '100%'
  },
  bottomPadding: {
    paddingBottom: 8,
  },
  greyColor: {
    color: 'grey'
  },
  whiteColor: {
    color: '#F5F5F5',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  subTitle: {
    fontWeight: 'normal',
    fontSize: 14
  },
  image: {
    flex: 1
  },
  imageContainer: {
    width: 100,
    height: 100
  },
  information: {
    paddingLeft: 6,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  smallFont: {
    fontSize: 12
  }
});
