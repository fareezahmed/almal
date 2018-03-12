import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import {
  Icon,
} from 'react-native-elements';

// Styles
import Colors from '../../assets/styles/Colors';
import inputStyles from '../../assets/styles/InputStyles';

const renderIcon = (icon, error) => (
  <Icon
    name={ icon }
    color={ Colors.ICON_COLOR }
    style={ inputStyles.iconStyle }
    size={ 26 }
    iconStyle={ [(error) ? inputStyles.errorIcon : {}] }
  />
);

const Input = ({
  error,
  icon,
  secureTextEntry,
  label,
  value,
  onChangeText,
  styles,
  last,
}) => (
  <View style={ [
    inputStyles.wrapperStyle,
    styles,
    ] }
  >
    { icon ? renderIcon(icon, error) : <View /> }
    <View style={ [
      inputStyles.containerStyle,
      (error) ? inputStyles.errorInput : {},
      (last) ? inputStyles.lastContainerStyle : {},
      ] }
    >
      <TextInput
        style={ inputStyles.inputStyle }
        placeholderTextColor={ Colors.WHITE }
        secureTextEntry={ secureTextEntry }
        placeholder={ label }
        value={ value }
        onChangeText={ onChangeText }
        autoCorrect={ false }
      />
    </View>
  </View>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  last: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
}

Input.defaultProps = {
  icon: '',
  secureTextEntry: false,
  last: false,
}

export { Input };
