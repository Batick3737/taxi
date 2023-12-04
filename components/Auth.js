import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function Auth( {navigation} ) {
  const onSignUp = () => {
    navigation.navigate('SignUp')
  }

  const onSignIn = () => {
    navigation.navigate('SignIn')
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onSignUp}
      >
        <Text> Реєстрація </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onSignIn}
      >
        <Text> Увійти </Text>
      </TouchableOpacity>
    </View>
  )
}
