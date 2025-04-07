import { View, Text, Pressable, Animated } from 'react-native'
import React, { FC, useEffect, useRef } from 'react'
//@ts-ignore
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './(tabs)';
import Explore from './(tabs)/explore';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Scan from './(tabs)/scan';
import { Colors } from '@/constants/Colors';

const Tab = createBottomTabNavigator();

const ICONS:{[key:string]:string} = {
  Home: 'home-outline',
  Scan: 'qrcode-scan',
  Explore: 'layers-search-outline',
}

const CustomTab:FC<BottomTabBarProps> = ({state, descriptors, navigation}) => {
  const animations = useRef(state.routes.map(() => new Animated.Value(1))).current;

  useEffect(() => {
    state.routes.forEach((_:any, index:number) => {
      if (index === state.index) {
        Animated.spring(animations[index], {
          toValue: 1.2,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(animations[index], {
          toValue: 1,
          useNativeDriver: true,
        }).start();
      }
    });
  }, [state.index]);

  return (
    <View className={`flex-row py-5 bg-[#2B2B36]`}>
      {state.routes.map((route:any, index:number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 items-center justify-center"
          >
            <Animated.View 
              style={{ 
                transform: [{ scale: animations[index] }],
                opacity: isFocused ? 1 : 0.8
              }}
            >
              <MaterialCommunityIcons
                //@ts-ignore
                name={ICONS[route.name]}
                size={28}
                color={isFocused ? Colors.light.preferedFG : 'white'}
              />
            </Animated.View>
          </Pressable>
        );
      })}
    </View>
  )
}

const RootLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}

      tabBar={(props:any) => <CustomTab {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Scan" component={Scan} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  )
}

export default RootLayout