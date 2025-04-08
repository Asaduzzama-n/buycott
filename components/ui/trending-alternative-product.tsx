import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { IProductData, productData } from '@/utils/main'
import { Colors } from '@/constants/Colors'
import ProductCard from './productCard'
import DetailsModal from './details-modal'

const TrendingAlternativeProducts = () => {
    const [selectedItem, setSelectedItem] = useState<any>(null);
    const [modalVisible, setModalVisible]= useState(false)

    const handlePress = (data:any) =>{
        setSelectedItem(data);
        setModalVisible(true)

    }

    const handleClose = () => {
        setModalVisible(false)
        setSelectedItem(null)
    }

  return (
    <View style={styles.container}>
     <View>
        <Text style={styles.headingText}>Trending Boycotted Products</Text>
     </View>
     <View style={styles.cardContainer}>
        <ProductCard data={productData} isBoycotted={false} handlePress={handlePress} />
     </View>
     {selectedItem && (
        <DetailsModal
            visible={modalVisible} 
            onClose={handleClose} 
            data={selectedItem} 
        />
    )}
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

export default TrendingAlternativeProducts