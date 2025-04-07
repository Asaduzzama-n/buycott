import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { IProductData, productData } from '@/utils/main'
import { Colors } from '@/constants/Colors'
import ProductCard from './productCard'

const TrendingBoycottedProducts = () => {
  return (
    <View style={styles.container}>
     <View>
        <Text style={styles.headingText}>Treding Boycotted Products</Text>
     </View>
     <View style={styles.cardContainer}>
        <FlatList
        keyExtractor={(item:IProductData) => item.name}
        data={productData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}: {item: IProductData}) => (
            <ProductCard item={item} isBoycotted={false} />
        )}
        
        
    />
     
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: 'white',
        margin: 10,
    },
    cardContainer: {

    },
    productCardContainer:{
        gap:10,
        backgroundColor:'#ededed',
        marginRight:10,
        borderRadius:10,
        padding:10,
        width:260,
    },
    imageContainer:{
        width:240,
        height:160,
        borderRadius:10
    },
    infoContainer:{
        rowGap:10,
    },
    headingText: {
        fontSize: 18,
        fontWeight: 'bold', // You can adjust the font weight as needed
        paddingVertical: 10, // Add some spacing below the heading text
        color: 'black'
    },
    normalText: {
        color: 'white',
        fontSize:14,
        fontWeight: 'bold',
        
    },
    subText: {
        color: Colors.light.secondaryText
    }
})

export default TrendingBoycottedProducts