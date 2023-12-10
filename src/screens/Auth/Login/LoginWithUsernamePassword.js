import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '../../../themes/themeContext';

const LoginWithUsernamePassword = () => {
  const {theme} = useTheme();
  console.log('theme ', theme);
  const styles = useStyle(theme);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={{flex: 1}}>
        <Text style={styles.textContainer}>{'LoginWithUsernamePassword'}</Text>
      </View>
    </SafeAreaView>
  );
};

const useStyle = theme =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.backgroundR,
    },
    textContainer: {
      color: theme.background,
    },
  });

export default LoginWithUsernamePassword;
