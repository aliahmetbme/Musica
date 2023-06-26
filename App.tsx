import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, SafeAreaView, Dimensions, Touchable, TouchableOpacity, GestureResponderEvent } from "react-native";
import music_data from "./music-data.json"
import  Search from "./components/searchbar/searxh";
import Music from "./components/SongCard/card"

function App(){

  const [musics, setMusic] = useState(music_data);
  const [datas, setDatas] = useState(music_data);

  const AvaliableSearch =() => {
    const filteredList = music_data.filter(song => {
      return !song.isSoldOut
    });
  
    setMusic(filteredList)
    setDatas(filteredList)
  }
  
  const InAvaliableSearch = () =>{
    const filteredList = music_data.filter(song => {
      return song.isSoldOut
    });
  
    setMusic(filteredList)
    setDatas(filteredList)
  }

  function showAllSong(){
    setMusic(music_data)
    setDatas(music_data)
  }

  const handleSearch = (text: string) => {
    const filteredList = datas.filter(song => {
      const searchedText = text.toLowerCase(); 
      const currenttitle = song.title.toLowerCase();
  
      return currenttitle.indexOf(searchedText) > -1;
    });
  
    setMusic(filteredList)
  }


  return(
  
    <SafeAreaView style={styles.container}>
      <Search onSearch={handleSearch} ></Search>
      <SearchButtons AvaliableSearch={AvaliableSearch} InAvaliableSearch={InAvaliableSearch} showAllSong={showAllSong}></SearchButtons>
        <FlatList 
            data={musics}
            renderItem={renderItem}
            ItemSeparatorComponent={itemSeperotor}>
        </FlatList>
      </SafeAreaView>
  )
}


const renderItem = ({item}) => <Music items={item}></Music>
const itemSeperotor = () => <View style={styles.seperator}></View>

function SearchButtons(props: { AvaliableSearch: ((event: GestureResponderEvent) => void) | undefined; InAvaliableSearch: ((event: GestureResponderEvent) => void) | undefined; showAllSong: ((event: GestureResponderEvent) => void) | undefined; }) {
  return (
    <View style={{flexDirection:'row', justifyContent:"space-around"}}>
        <TouchableOpacity style={styles.button} onPress={props.AvaliableSearch}  >
          <Text style={styles.buttonText}> MEVCUT </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={props.InAvaliableSearch} >
          <Text style={styles.buttonText}> TüKENENLER </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={props.showAllSong}>
          <Text style={styles.buttonText}> HEPSİ </Text>
        </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  seperator:{
    width:Dimensions.get("screen").width,
    height:1,
    backgroundColor:'gray'
  },
  button:{
    borderRadius:10,
    backgroundColor:'#DADADA',
    padding:5,
    borderColor:'black',
    borderWidth:2,
    width:Dimensions.get("screen").width /4
  },
  buttonText:{
    color:'black',
    fontSize:12,
    textAlign:'center'
  }
})

export default App;