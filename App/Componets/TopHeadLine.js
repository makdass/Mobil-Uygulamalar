import React, { useEffect, useState } from 'react'
import { View ,Text, FlatList, TouchableOpacity,Image, Dimensions} from 'react-native'
import GlobalApi from '../Services/GlobalApi';
function TopHeadLine() {
  const [newList, setNewList]= useState([]);
  useEffect (()=> {
    
    getTopHeadLine();
  },[])
  const getTopHeadLine=async() =>{
    const result= (await GlobalApi.getTopHeadLine).data;
    setNewList(result.articles)
  }
  return (
  <View>
    <FlatList
    data={newList}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>(


      <TouchableOpacity>
        <Image source={{uri:item.urlToImage}}
          style={{height:Dimensions.get('screen').width*0.77,
           borderRadius:20,
           }}/>
           <Text numberOfLines={3} style={{fontWeight:'bold',
            marginHorizontal:7 , 
            fontSize:15 ,
          
            }}>{item.title}</Text>
           <Text> {item?.source?.name}</Text>
      </TouchableOpacity>
    )}
    
    />
  </View> 
  )
}

export default TopHeadLine