import React from "react";
import { View, Text, Image } from "react-native";
import cardsStyle from "./cardstyle"


function App({items}){

    const soldInfo = items.isSoldOut

    return(
        <View style={cardsStyle.container}>
           <Image style={cardsStyle.ImageStyle} source={{uri: items.imageUrl}}></Image>
            <View style={cardsStyle.containertwo}>
                <Text style={cardsStyle.title}>{items.title}</Text>
                <View style={cardsStyle.containerthree}>
                    <Text>{items.artist}</Text>
                    <Text style={cardsStyle.year}>{items.year}</Text>
                    {soldInfo && <View style={{ marginLeft: 'auto',marginRight:10}}><Text style={cardsStyle.soldOutStyle}>TÜKENDİ</Text></View>}
                </View>
               
            </View>
        </View>
    )
}

export default App