import React from 'react';
import { Text, View} from 'react-native';
import { styles } from './style';
import { useAuth } from './useAuth';

export default function Main() {

  const { user } = useAuth();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ласкаво просимо {user.email}</Text>
      <Text style={styles.text}>Тут би мала бути карта</Text>
    </View>
  )
}
