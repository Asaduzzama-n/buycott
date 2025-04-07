import { View, Text, FlatList, Image, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { StatusBar } from 'expo-status-bar'

import { onboard } from '@/utils/data/onboarding'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/dimension'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { router } from 'expo-router'

interface OnboardingItem {
  id:string,
  title:string,
  text:string,
  image:string
  cta:string
}




const Welcome = () => {
  const flatListRef = useRef<FlatList<OnboardingItem>>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;


  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );


  useEffect(() => {
    const listener = scrollX.addListener(({ value }) => {
      const index = Math.round(value / SCREEN_WIDTH);
      setCurrentIndex(index);
    });

    return () => {
      scrollX.removeListener(listener);
    };
  }, []);


  const handleNext = () => {
    if (currentIndex === onboard.length - 1) {
      // Handle the "Get Started" button press
      router.replace('/(root)/(tabs)')
    } else {
      // Scroll to the next item
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
    }
  };

  const renderPagination = () => {
    return (
     <View className='flex-row items-center h-3'>
      {
        onboard.map((_, index) => {
          const inputRange = [(index-1) * SCREEN_WIDTH, index* SCREEN_WIDTH, (index+1) * SCREEN_WIDTH];
          const width = scrollX.interpolate({
            inputRange,
            outputRange: [14, 36, 14],
            extrapolate: 'clamp',
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp', 
          })
          return (
           <Animated.View key={index} className='h-4 rounded-full mx-1 bg-white' style={{width, opacity}}>
           </Animated.View>
          )
        }
      )
      }
     </View> 
    ) 
  }



  return (
    <View className='flex-1 bg-white'>
      <StatusBar style='light'/>
      <FlatList
      ref={flatListRef}
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={handleScroll}
      pagingEnabled
      keyExtractor={(item:OnboardingItem)=>item.id}
      data={onboard}
      renderItem={({ item }) => (
        <View className='flex-1 '>
          {/* Image taking full screen */}
          <Image
            className=''
            source={item.image}
            style={{ flex:1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
            resizeMode="cover"
          />
          
          {/* Gradient overlay for better text visibility */}
          <View className="absolute inset-0 bg-black/30 "  />
          
          {/* Title at the top */}
          <SafeAreaView className="absolute top-0 left-0 right-0">
            <View className="px-6 pt-8">
              <Text className="text-white text-3xl font-bold text-center">{item.title}</Text>
            </View>
          </SafeAreaView>
          
          {/* Text in the middle */}
          <View className="absolute top-1/2 left-6 right-6 transform -translate-y-1/2 ">
            <Text className="text-white text-3xl font-bold text-center leading-8">{item.text}</Text>
          </View>

          {/* Text in the middle */}
          <View className="absolute top-3/4 left-6 right-6 transform -translate-y-1/2">
            <Text className="text-white text-xl font-bold text-center leading-8">{item.cta}</Text>
          </View>
        </View>
      )}
      />

     {/* Next button and pagination dots at the bottom */}
     <SafeAreaView className="absolute bottom-0 left-0 right-0">
        <View className="px-6 h-32 flex-row justify-between items-center">
          {renderPagination()}
          
          <Animated.View
          
          >
            {currentIndex === onboard.length - 1 ? (
              <TouchableOpacity
                className="bg-white px-6 py-3  rounded-full"
                onPress={handleNext}
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <Text className="text-black font-bold text-base">Get Started</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                className="bg-white w-14 h-14 rounded-full items-center justify-center"
                onPress={handleNext}
                style={{
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
              >
                <MaterialIcons name="arrow-forward" size={24} color="#000" />
              </TouchableOpacity>
            )}
          </Animated.View>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Welcome