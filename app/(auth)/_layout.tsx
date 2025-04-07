
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
   <Stack
   tabBarStyle={{display:'none', headerShown:false}}
   >
    <Stack.Screen name='welcome' options={{headerShown:false}}/>
    <Stack.Screen name='login' options={{headerShown:false}}/>
    <Stack.Screen name='register' options={{headerShown:false}}/>
   </Stack>
  )
}

export default AuthLayout