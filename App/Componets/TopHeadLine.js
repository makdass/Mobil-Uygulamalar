import React, { useEffect, useState } from 'react'
import { View ,Text, FlatList, TouchableOpacity,Image} from 'react-native'
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
    renderItem={({item})=>(


      <TouchableOpacity>
        <Image source={{uri:item.urlToImage}}
        style={{height:350}}/>
      </TouchableOpacity>
    )}
    
    />
  </View>
  )
}

export default TopHeadLine