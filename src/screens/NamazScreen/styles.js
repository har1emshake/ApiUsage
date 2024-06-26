import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#efe',
    alignItems: 'center',
  },

  //--------------------------
  header: {
    width: windowWidth,
    height: windowHeight * 0.075,
    backgroundColor: '#153448',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * 0.05,
  },
  headerText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  body: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.8,
    backgroundColor: '#efe',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: windowHeight * 0.005,
  },
  //--------------------------

  cityText: {
    fontSize: windowWidth * 0.075,
    color: 'black',
    fontWeight: '500',
    paddingVertical: windowHeight * 0.005,
    textTransform: 'uppercase',
  },

  //--------------------------

  button: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.06,
    backgroundColor: '#153448',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: windowWidth * 0.03,
  },

  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.045,
    fontWeight: '500',
  },

  //--------------------------

  info: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: windowHeight * 0.005,
  },

  infoItem: {
    width: windowWidth * 0.5,
    flexDirection: 'row',
    columnGap: windowWidth * 0.03,
    paddingVertical: windowHeight * 0.005,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoText: {
    fontSize: windowWidth * 0.05,
    color: 'black',
    fontWeight: '500',
    paddingVertical: windowHeight * 0.005,
    textTransform: 'capitalize',
  },
});
