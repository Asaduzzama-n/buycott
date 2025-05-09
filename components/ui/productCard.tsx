import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { IProductData } from '@/utils/main'



const ProductCard = ({ data, isBoycotted , handlePress}: {data:any, isBoycotted:boolean, handlePress: (data: any) => any}) => {
  // Style calculations moved outside return for better readability
  const nameBrandStyle = {
    ...styles.normalText,
    backgroundColor: isBoycotted ? 'red' : Colors.light.preferedFG,
    paddingHorizontal: 10, 
    borderRadius: 40
  }

  return (
            <FlatList
            keyExtractor={(item:IProductData) => item.name}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: {item: IProductData}) => (
              <Pressable onPress={() => handlePress(item)} style={styles.productCardContainer}>
              {/* Image Section */}
              <Image 
                style={styles.imageContainer} 
                source={item.image}  
                resizeMode='cover' 
              />
              
              {/* Info Section */}
              <View style={styles.infoContainer}>
                <View style={styles.nameBrandRow}>
                  <Text style={nameBrandStyle}>{item.name}</Text>
                  <Text style={nameBrandStyle}>{item.brandName}</Text>
                </View>
                
                <Text style={styles.subText}>{item.manufacturerInBangladesh}</Text>
                <Text style={styles.subText}>
                  {item.israelRelatedPerception.slice(0, 50)}...
                </Text>
              </View>
            </Pressable>
            )}
            
            
        />

  )
}

const styles = StyleSheet.create({
  productCardContainer: {
    gap: 10,
    backgroundColor: '#ededed',
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
    width: 260,
  },
  imageContainer: {
    width: 240,
    height: 160,
    borderRadius: 10
  },
  infoContainer: {
    rowGap: 10,
  },
  nameBrandRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  normalText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subText: {
    color: Colors.light.secondaryText
  }
})

export default ProductCard