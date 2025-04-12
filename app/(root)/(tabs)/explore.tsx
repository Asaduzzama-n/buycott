import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { IProductData, productData } from '@/utils/main';
import ProductCard from '@/components/ui/productCard';
import { Colors } from '@/constants/Colors';
import { SCREEN_WIDTH } from '@/constants/dimension';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderExploreCard from '@/components/ui/explore-card';
import DetailsModal from '@/components/ui/details-modal';

const Explore = () => {
  const [searchText, setSearchText] = useState('')
  const [selectedFilter, setSelectedFilter] = useState<'product' | 'brand' | 'alternative'>('product')
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const rotateAnim = useRef(new Animated.Value(0)).current

  const scrollRef = useRef<FlatList<IProductData>>(null)



  const toggleDropdown = () => {
    if (dropdownVisible) {
      Animated.timing(rotateAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      }).start()
    }
    setDropdownVisible(!dropdownVisible)
  }

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  const handleFilterSelect = (filter: 'product' | 'brand' | 'alternative') => {
    setSelectedFilter(filter)
    toggleDropdown()
  }



  const filterOptions = [
    { label: 'Product', value: 'product', icon: 'package' },
    { label: 'Brand', value: 'brand', icon: 'tag' },
    { label: 'Alternative', value: 'alternative', icon: 'refresh-cw' }
  ]


  const filteredData = productData.filter(item => {
    if (selectedFilter === 'product') {
      return item.name.toLowerCase().includes(searchText.toLowerCase())
    } else if (selectedFilter === 'brand') {
      return item.brandName.toLowerCase().includes(searchText.toLowerCase())
    } else{
      return item
    }
  })

  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animatedValue,{
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start()
  }, [filteredData])

  const [selectedItem, setSelectedItem] = useState<IProductData | null>(null);
const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (data: IProductData) => {
        setSelectedItem(data);
        setModalVisible(true)

    }

    const handleClose = () => {
        setModalVisible(false)
        setSelectedItem(null)
    }







  return (
    <SafeAreaView style={styles.container}>
   
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Explore Products</Text>
        
        <View style={styles.searchContainer}>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder='Search products...'
            placeholderTextColor={Colors.light.secondaryText}
            style={styles.searchInput}
          />
          
          <TouchableOpacity 
            style={styles.filterButton}
            onPress={toggleDropdown}
            activeOpacity={0.7}
          >
            <View style={styles.filterButtonContent}>
              <Feather 
               //@ts-ignore
                name={filterOptions.find(o => o.value === selectedFilter)?.icon || 'filter'} 
                size={20} 
                color={Colors.light.preferedFG} 
              />
              <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
                <Feather 
                  name="chevron-down" 
                  size={20} 
                  color={Colors.light.preferedBG} 
                  style={styles.chevronIcon}
                />
              </Animated.View>
            </View>
          </TouchableOpacity>
        </View>

        {dropdownVisible && (
          <Animated.View style={styles.dropdown}>
            {filterOptions.map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.dropdownItem,
                  selectedFilter === option.value && styles.selectedItem
                ]}
                onPress={() => handleFilterSelect(option.value as any)}
              >
                <Feather 
                //@ts-ignore
                  name={option.icon} 
                  size={18} 
                  color={
                    selectedFilter === option.value 
                      ? Colors.light.preferedFG 
                      : Colors.light.preferedBG
                  } 
                  style={styles.itemIcon}
                />
                <Text style={[
                  styles.dropdownText,
                  selectedFilter === option.value && styles.selectedText
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        )}
      </View>

      {/* <View>
        <Text>{selectedFilter}</Text>
        <Text>{searchText}</Text>
      </View> */}

      <Animated.FlatList
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        bounces={false}
        ref={scrollRef}

        data={filteredData}
        renderItem={({item, index}) => (
         <RenderExploreCard item={item} index={index} handlePress={handlePress} />
        )}
      />
      {selectedItem && (
        <DetailsModal
            visible={modalVisible}
            onClose={handleClose}
            data={selectedItem}
        />
    )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal:15,
  },
  headerContainer: {
    marginBottom: 20,
    zIndex: 1, // Ensure dropdown appears above other elements
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.text,
    marginVertical: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    height: 45,
    backgroundColor: '#ededed',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: Colors.light.text,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: '#ededed',
    borderRadius: 10,
    height: 45,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronIcon: {
    marginLeft: 5,
  },
  dropdown: {
    position: 'absolute',
    top: 120,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    // paddingVertical: 5,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  selectedItem: {
    backgroundColor: '#ededed',
    borderRadius: 5,
  },
  dropdownText: {
    fontSize: 14,
    color: 'black',
    marginLeft: 10,
  },
  selectedText: {
    color: Colors.light.preferedFG,
    fontWeight: 'bold',
  },
  itemIcon: {
    width: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  imageContainer: {
    width: SCREEN_WIDTH/2 - 45,
    height: SCREEN_WIDTH/2 - 45,
    borderRadius: 10
  },
})

export default Explore