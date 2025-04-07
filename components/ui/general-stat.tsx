import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { generalStat } from '@/utils/main'
import { SCREEN_WIDTH } from '@/constants/dimension'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

interface IGeneralStat {
    id: number,
    title: string,
    count: number,
    color: string,
    icon: string
    textColor: string
}

const GeneralStat = () => {
  return (
    <View style={styles.container}> 
       <FlatList
        
        keyExtractor={(item:IGeneralStat) => item.id.toString()}
        key={2}
        data={generalStat}
        numColumns={2}
        renderItem={({item}:{item:IGeneralStat}) => {
            return (
               <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.text}>{item.title}</Text>
                        <Text style={[styles.text,{fontSize:16}]}>{item.count}</Text>
                    </View>
                    {/* @ts-ignore */}
                    <MaterialCommunityIcons style={styles.icon} name={item.icon} size={28}></MaterialCommunityIcons>
               </View>
            ) 
        }}
        />
        
    </View>
  )
}


const styles = StyleSheet.create({
    container: {

        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between', 
        margin:10,
        borderRadius:10,

    } ,
    cardContainer:{
        flex:1,
        height:SCREEN_WIDTH/3.5,
        margin:5,
        backgroundColor:'#ededed',
        borderRadius:10,
    },
    card:{
        padding:20,
        rowGap:10,
    },
    text:{
        fontSize:14,
        fontWeight:'bold',
    },
    icon:{
        position:'absolute',
        right:20,
        bottom:20,
        color:Colors.light.preferedFG
    }
})

export default GeneralStat