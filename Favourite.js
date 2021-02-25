import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const Favourite = () => {
  
  useEffect(() => {
      
    const readData = async () => {
        try {
          const x = await AsyncStorage.getItem('90');

            console.log(x)
          
        } catch (e) {
          alert('Failed to fetch the data from storage')
        }
      }
      readData();

  }, [])

    return (
        <View>
            <Text>favourite</Text>
        </View>
    )
}

export default Favourite
