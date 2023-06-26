import React, { useState } from "react";
import { View, TextInput } from "react-native";
import style from "./searchstye"


export default function searchbar(onSearch){

    return(
        <View>
            <TextInput
            onChangeText={onSearch.onSearch}
            placeholder="Ara..."
            style={style.searchbar}></TextInput>
        </View>
    )
}