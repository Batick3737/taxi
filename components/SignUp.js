import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';
import { useAuth } from './useAuth';

export default function SignUp( {navigation} ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRpassword] = useState('');
  const [error, setError] = useState('');
  const [successfullySignUp, setSuccessfullySignUp] = useState(false);

  const {users, setUsers} = useAuth();
  
  const authHandler = () => {
    if (email && password && password === rpassword && !users.some(a => a.email === email)) {
      setUsers((prev) => [...prev, {email: email, password: password}])
      AsyncStorage.setItem('users', JSON.stringify(users))
      setSuccessfullySignUp(true);
    } else if (password !== rpassword && password && rpassword) {
      setError('Невірно введений повторно пароль');
    } else if (users.some(a => a.email === email)) {
      setError('Цей email вже занятий');
    } else {
      setError('Заповніть всі поля!');
    }
  }

  if (successfullySignUp) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Реєстрація Успішна</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
        <Text> На головну </Text>
        </TouchableOpacity>
      </View>
      )
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Реєстрація</Text>
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
        <TextInput
          value={rpassword}
          onChangeText={setRpassword}
          style={styles.inputRN}
          placeholder='Re-Password...'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={authHandler}
        >
          <Text> Зареєструватися </Text>
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
}
