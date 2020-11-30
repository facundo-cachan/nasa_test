import {width, height} from '@utils/_dimensions';

export default {
  container: {
    flex: 1,
    width,
    height,
    flexDirection: 'column',
    marginTop: 1,
    backgroundColor: '#424242',
  },
  scrollView: {
    width,
    height: height + width,
    backgroundColor: '#4646',
  },
  screenTitle: {
    width,
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: '#4646',
  },
  headerLogo: {width: 50, height: 50},
  viewCentered: {
    width: width - 10,
    height: width / 2,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width,
    height: width,
  },
  rover: {
    width,
    height: width / 2,
    resizeMode: 'stretch',
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
    height: height / 15,
    padding: 10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
