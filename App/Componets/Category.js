import React from 'react'
import { FlatList ,TouchableOpacity,View,Text, StyleSheet} from 'react-native'

function Category() {
    const CategoryList = [
        {
            id:1,
            name:'Gecmis'
        },
        {
            id:2,
            name:'Dunya'
        },
        {
            id:3,
            name:'iş'
        },
        {
            id:4,
            name:'spor'
        },
        {
            id:5,
            name:'Sanat'
        } ,   
    ]
  return (
    <View style={{marginTop:30}}>

        <FlatList
        data={CategoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <TouchableOpacity>
                <Text style={styles.SecilmemisYazi}>{item.name }</Text>
            </TouchableOpacity>

        )} />

 </View>
        







    
    
  )

  
}  
  const styles = StyleSheet.create({
    SecilmemisYazi:{
        marginRight:15,
        fonstSize: 25,
        fontWeight:'bold'
    }
  })

export default Category