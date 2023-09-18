import React, { useState } from 'react'
import { FlatList ,TouchableOpacity,View,Text, StyleSheet, TouchableHighlight} from 'react-native'
import color from '../Shared/color'

function Category() {
    const [active ,setActive]=useState(1)
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
    const onCategoryClick=(id)=>{
        setActive(id)
    }
  return (
    <View style={{marginTop:30}}>

        <FlatList style={{marginLeft:15}}
        data={CategoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        
        renderItem={({item}) => (
            <TouchableOpacity onPress={()=>onCategoryClick(item.id) }>
                <Text style={item.id==active?styles.SecilmisYazi:styles.SecilmemisYazi

                    }>{item.name }</Text>
            </TouchableOpacity>

        )} />
</View>
        







    
    
  )

  
}  
  const styles = StyleSheet.create({
    SecilmemisYazi:{

        marginRight:20 ,
        fontSize: 20,
        fontWeight:'bold',
        color:'#424242'
    },
    SecilmisYazi:{

        marginRight:20 ,
        fontSize: 20,
        fontWeight:'bold',
        color:'#4682b4',
    }
    
   
  }) 
  
  
 

export default Category