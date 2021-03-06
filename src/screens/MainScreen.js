import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

// Styles
import styles from '../assets/styles/MainScreenStyles'

// Components
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';
import List from '../components/List';
import IconButton from '../components/IconButton';

// eslint-disable-next-line  react/prefer-stateless-function
class MainScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <PageWrapper type="secondary">
        {/* Header */}
        <Header
          title="Records"
          navigation={ this.props.navigation }
          secondaryNavigation="Lead"
          secondaryIcon="settings"
        />
        {/* Body */}
        <View style={ styles.main }>
          <List
            navigation={ this.props.navigation }
          />
        </View>
        <View style={ styles.footer }>
          <IconButton
            name="add"
            size={ 40 }
            onPress={ () => navigate('Lead') }
          />
        </View>
      </PageWrapper>
    )
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default MainScreen;
