import { View, Text, TextInput, Button, Alert, KeyboardAvoidingView, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'

const login_form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView>
        <View>
            <Text>Email Address</Text>
            <TextInput
                placeholder='name@example.com'
                placeholderTextColor="#94a3b8"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}/>
            <Text>Password</Text>
            <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}/>
            <Button title='Press Here' onPress={()=>alert('Button Pressed '+email)}  />
            <TouchableOpacity>
                <Text>This is opaque</Text>
            </TouchableOpacity>
            <Pressable>
                <Text>This is pressable</Text>
            </Pressable>
        </View>
    </KeyboardAvoidingView>
  )
}

export default login_form