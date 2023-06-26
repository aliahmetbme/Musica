import { StyleSheet ,Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"center"
    },
    containertwo:{
        margin:10,
        flex:1,
        fontSize:9,
        color:'white'
        
    },
    containerthree:{
        flex:1,
        fontSize:9,
        color:'white',
        flexDirection:'row'
        
    },
    ImageStyle:{
        height: 100,
        width:100,
        resizeMode:'contain',
        borderRadius:50,
        margin:10,

    },
    title:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
        textAlignVertical:'center',

    },
    year:{
        paddingLeft:15
    },
    soldOutStyle:{
        justifyContent:'flex-end',
        borderColor:'red',
        color:'red',
        borderRadius:5,
        padding:2,
        fontSize:10,
        borderWidth:1,
        textAlign:"center"

    }
    

})

//// Yarıçapı genişlik/2 olarak ayarlanmalıdır --> resmi yuvarlak yapmak