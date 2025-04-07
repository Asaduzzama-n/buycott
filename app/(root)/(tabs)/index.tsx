import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GeneralStat from '@/components/ui/general-stat'
import TrendingBoycottedProducts from '@/components/ui/trending-boycotted-product'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}> 
        {/* General Stat Section */}
        <View>
        <GeneralStat />
        </View>

        <ScrollView>
        <TrendingBoycottedProducts />
        <TrendingBoycottedProducts />
        </ScrollView>


    </SafeAreaView>
  )
}
const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    }
})
export default Home