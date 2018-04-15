import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../assets/styles/PageStyles'

const PageWrapper = ({ bg, type, children }) => (
  <View style={ type ? styles.secondPageType : styles.page }>
    {
      bg ? (
        <Image
          style={ styles.container }
          source={ bg }
        >
          {children}
        </Image>
      ) : children
    }
  </View>
);

PageWrapper.propTypes = {
  bg: PropTypes.number,
  type: PropTypes.string,
}

PageWrapper.defaultProps = {
  bg: null,
  type: '',
}

export default PageWrapper;
