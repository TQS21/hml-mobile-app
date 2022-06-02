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
import md5 from "react-native-md5";
import SimpleLottie from '../components/SimpleLottie'

export default class LoginScreen({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const onLoginPressed = () => {

    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    //let resp = fetch('http://192.168.1.69:8393/user/'+email.value, {
    let resp = fetch('http://...../login?email='+email.value+'&password='+password.value, {
      method: 'POST',
    }).then((response)=>{
      if(!response.ok) throw new Error(response.status);
      else  {
        data = response.json()
        navigation.navigate('MainScreen',
        {
          token: logins["token"]
        })
      }

    })

    return
  }

    return (
      <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Log in</Header>

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
        style={{backgroundColor: theme.colors.primary}} onPress={onLoginPressed}>
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