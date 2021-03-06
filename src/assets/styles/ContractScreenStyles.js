import { StyleSheet } from 'react-native';

import Variables from './Variables';
import Colors from './Colors';
import { secondaryMain } from './GlobalStyles';

const main = secondaryMain

export default StyleSheet.create({
  fromWrapper: {
    marginTop: Variables.Spacing,
    width: '100%',
  },
  main,
  errorSection: {
    width: '100%',
    height: 48,
  },
  errorMessage: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Variables.Spacing,
    paddingVertical: Variables.SpacingSml,
    color: Colors.ERROR_SECONDARY,
    textAlign: 'center',
  },
});
