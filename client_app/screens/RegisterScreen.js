import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import SimpleLottie from '../components/SimpleLottie'

export default class RegisterScreen({navigation}) {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const onRegistPressed = () => {

    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const nameError = nameValidator(name.value)
    if (emailError || passwordError || nameError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setName({ ...name, error: nameError })
      return
    }

    let formData = new FormData();
    formData.append("name", name.value);
    formData.append("password", password.value );
    formData.append("email", email.value);
    //let resp = fetch('http://192.168.1.69:8393/user/2', {
    let resp = fetch('http://....../user/2', {
      method: 'PUT',
      body: formData
    }).then((response)=>{
        if (response.ok) {
          navigation.navigate("StartScreen")
        } else  throw new Error(response.status)
        
      })

    return
  }

    return (
      <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Register</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
        autoCapitalize="none"
      />
      
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />


      <Button mode="outlined"
        color={'white'}
        style={{backgroundColor: theme.colors.primary}} onPress={onRegistPressed}>
        Login
      </Button>

    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingBottom: 100,
    },
    inputTextWrapper: {
      marginBottom: 24,
    },
    textInput: {
      height: 40,
      borderColor: "#000000",
      borderBottomWidth: 1,
      paddingRight: 30,
    },
    errorText: {
      color: 'red',
      fontSize: 10,
    },
    btnContainer: {
      backgroundColor: "white",
      marginTop:36,
    }
  });