import { View, Text, Image, Animated, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import { SCREEN_WIDTH } from '@/constants/dimension'
import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useSharedValue } from 'react-native-reanimated'
import DetailsModal from './details-modal'
import { IProductData } from '@/utils/main'

const RenderExploreCard = ({item, index, handlePress}: {item: any, index: number, handlePress: (data: any) => any}) => {
    const animatedValue = useRef(new Animated.Value(0)).current

    useEffect(()=>{
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500,
            delay:index * 100,
            useNativeDriver: true
        }).start()
    },[])

    


    const translateY = animatedValue.interpolate({
        inputRange:[0,1],
        outputRange:[20,0]
    })

    const opacity = animatedValue;

    return (
        <Animated.View  style={{ 
          transform: [{ translateY }], 
          opacity 
        }}>
          <Pressable onPress={() => handlePress(item)} style={{
            flex: 1, 
            rowGap: 10, 
            backgroundColor: "#ededed", 
            padding: 10, 
            borderRadius: 10
          }}>
            <Image 
              style={styles.imageContainer} 
              source={item.image}  
              resizeMode='cover' 
            />
            <View>
              <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{color: Colors.light.text, fontSize: 14, fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{color: Colors.light.text, fontSize: 14}}>{item.brandName}</Text>
              </View>
              <Text style={{color: Colors.light.text, fontSize: 14, fontWeight: 'bold'}}>
                Recommended by <Text style={{color: Colors.light.preferedFG, fontSize: 16}}>189</Text>
              </Text>
            </View>
          </Pressable>
          
        </Animated.View>
      )
    
}

const styles = StyleSheet.create({
  imageContainer: {
    width: SCREEN_WIDTH/2 - 45,
    height: SCREEN_WIDTH/2 - 45,
    borderRadius: 10
  },
})

export default RenderExploreCard