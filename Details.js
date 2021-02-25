import React from 'react'
import { View, Text ,Image} from 'react-native'

const Details = ({navigation,route}) => {
    console.log(route.params.item.weight);
    return (
        <View style={{flex:1,justifyContent:'center'}}>
           <View style={{alignItems:'center'}}>  
            <Image
            style={{width: 300, height: 300}}
            source={{uri: route.params.url}}
            />
            <Text style={{fontSize:30,fontWeight:'bold'}}>{route.params.name.toUpperCase()}</Text>
            <Text style={{fontSize:26,paddingVertical:20}}>Height: {route.params.item.height}</Text>
            <Text style={{fontSize:26}}>Weight: {route.params.item.weight}</Text>
            </View>

        </View>
    )
}

export default Details
