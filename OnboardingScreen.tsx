import { 
    View, 
    Text, 
    TextInput, 
    Pressable, 
    FlatList,
    Button,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
     } from 'react-native';
import React, { useState } from 'react';

const OnboardingScreen = () => {
  return (
    <View>
       <Image
          source={require('../img/barista.jpg')}
          style={{width: 44, height: 44, borderRadius: 14, top: 3}}
        />
    </View>
  )
}

export default OnboardingScreen
