import {width, height} from '@utils/_dimensions';

export default {
  container: {
    flex: 1,
    width,
    height: height / 3,
    flexDirection: 'column',
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#424242',
  },
  scrollView: {
    width,
    height: height + width,
    backgroundColor: '#4646',
  },
  screenTitle: {
    width,
    height: 70,
    backgroundColor: '#819FF7',
    alignItems: 'center',
    justifyItems: 'center',
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
    flex: 1,
    width,
    height: width,
  },
};
