import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './style';
import { useAuth } from './useAuth';

export default function SignIn( {navigation} ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {users, setUser} = useAuth();

  
  const authHandler = () => {
    if (email && password) {
      if (users.some(a => a.email === email)) {
        const user = users.find(a => a.email === email)
        if (user.password === password) {
          setUser({email: email, password: password})
          setError('')
          navigation.navigate('Main')
        } else {
          setError('Email або пароль невірний');
        }
      } else {
        setError('Email або пароль невірний');
      }
    } else {
      setError('Заповніть всі поля!');
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Вхід</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.inputRN}
        placeholder='Email...'
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.inputRN}
        placeholder='Password...'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={authHandler}
      >
        <Text> Увійти </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text> На головну </Text>
      </TouchableOpacity>
      {error && <Text style={styles.text}>{error}</Text>}
    </View>
  )
}
