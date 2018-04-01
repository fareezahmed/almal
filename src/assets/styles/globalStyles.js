import { Platform } from 'react-native';

// Environment Variable
import Colors from './Colors';
import Variables from './Variables';

const { Screen } = Variables;

const resizeMode = 'cover';

export const coverFullPage = {
  flex: 1,
  resizeMode,
  position: 'absolute',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
}

export const FullPage = {
  flex: 1,
  position: 'absolute',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  backgroundColor: Colors.WHITE,
}

export const header = {
  flex: 1,
}

export const main = {
  flex: 4,
  justifyContent: 'center',
  alignItems: 'center',
}

export const footer = {
  flex: 1,
}

export const circle = {
  borderRadius: 200,
  justifyContent: 'center',
  alignItems: 'center',
}

export const windowSize = {
  height: Screen.height,
  width: Screen.width,
}

export const title = {
  ...Platform.select({
    ios: {
      fontFamily: 'HelveticaNeue',
    },
    android: {
      fontFamily: 'Roboto',
    },
  }),
  fontSize: Variables.H1FontSize,
  color: Colors.WHITE,
  backgroundColor: 'transparent',
  fontWeight: '500',
}

export const headerTitle = {
  ...Platform.select({
    ios: {
      fontFamily: 'HelveticaNeue',
    },
    android: {
      fontFamily: 'Roboto',
    },
  }),
  fontSize: Variables.H2FontSize,
  color: Colors.WHITE,
  backgroundColor: 'transparent',
  fontWeight: '700',
}

export const baseText = {
  ...Platform.select({
    ios: {
      fontFamily: 'HelveticaNeue',
    },
    android: {
      fontFamily: 'Roboto',
    },
  }),
  fontSize: Variables.baseFontSize,
  color: Colors.TEXT_COLOR,
  fontWeight: '300',
}

export const secondaryText = {
  backgroundColor: 'transparent',
  color: Colors.WHITE,
  fontWeight: '500',
  fontSize: Variables.baseFontSize,
}

export const link = {
  backgroundColor: 'transparent',
  color: Colors.LINK_COLOR,
  fontWeight: '500',
  fontSize: Variables.baseFontSize,
}

export const centerContainWrapper = {
  backgroundColor: 'transparent',
  justifyContent: 'center',
  alignItems: 'center',
}

export const button = {
  paddingVertical: 4,
  backgroundColor: 'transparent',
  color: Colors.WHITE,
  fontWeight: '500',
  fontSize: Variables.H3FontSize,
}

export const formStyle = {
  marginTop: 16,
  justifyContent: 'center',
  alignItems: 'center',
}

export const backButton = {
  marginTop: Platform.OS === 'ios' ? 30 : 45,
  marginLeft: Variables.Spacing,
  backgroundColor: Colors.TRANSPARENT,
  alignItems: 'flex-start',
}

export const alignment = {
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
}
