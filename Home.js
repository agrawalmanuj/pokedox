import React,{useEffect,useState} from 'react'
import { View, Text,Image, ScrollView, TouchableOpacity,ActivityIndicator } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-community/async-storage'









const Home = ({navigation}) => {
  let arr= [];
    const [pok,setPok] = useState([]);
   
    
    const storeData = async () => {
     let key="90";
     let value ="1110";
      try {
        await AsyncStorage.setItem(
         key,value
        );
       

        navigation.navigate("Favourite")
    
      } catch (error) {
        // Error saving data
      }
    };
    



    useEffect(() => {
        //console.log('pppppp');

       


        async function fetchDetails(item,i,len) {
           
            let response = await fetch(item.url);
            let p=await response.json();
            
           // let c= p.sprites.back_default;
           // let d=item.name;
            arr.push({name:item.name,url:p.sprites.back_default,item:p});
            if(i===len){
            console.log('arr1',arr.length);
            setPok(arr);
            }
        

        }
       
        async function fetchMyAPI() {
          
            let response = await fetch('https://pokeapi.co/api/v2/pokemon/');
            let p=await response.json();
            
          const {results} = p; 
        //  console.log('pppppp',p);
           let x;
          
           for(let i=0;i<results.length;i++){
             
              
            
            fetchDetails(results[i],i,results.length-1);
              
           }
           console.log('arr2',arr);
           //setPok(arr);
          
          
            
          }
        fetchMyAPI();
          
         
    }, [])


    
    return (
      <ScrollView>
        <View style={{flex:1,marginVertical:0}}>
           
           {pok.length > 0 ? (
      pok.map((item,i) => {
        
       return ( (i%2==0 && i+1<pok.length)? (<View key={i} style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,marginHorizontal:20}}>
         <View key={i+1} style={{width:150,height:150,backgroundColor:'#faf8f7',
        borderWidth:1,
        borderColor:'#faf8f7',
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        
        }}
       
        
        >
        <TouchableOpacity style={{alignItems:'flex-end',paddingRight:10,paddingTop:10}}>
       <MaterialIcons name="favorite-border" size={24} color="black"  />
       </TouchableOpacity>
       <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}}  onPress={()=>navigation.navigate("Details",{name:pok[i].name,url:pok[i].url,item:pok[i].item})}>
        <Image
        style={{width: 70, height: 70}}
        source={{uri: pok[i].url}}
      />
      <Text style={{fontWeight:'bold'}}>{pok[i].name.toUpperCase()}</Text>
      </TouchableOpacity>
      </View>




      <View key={i+2} style={{width:150,height:150,backgroundColor:'#faf8f7', 
    borderWidth:1,
    borderColor:'#faf8f7',
    borderRadius:5,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    }}
    
    
    
    >
      <View style={{alignItems:'flex-end',paddingRight:10,paddingTop:10}}>
       <MaterialIcons name="favorite-border" size={24} color="black"  />
       </View>
       <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} onPress={()=>navigation.navigate("Details",{name:pok[i+1].name,url:pok[i+1].url,item:pok[i+1].item})}>
      <Image
        style={{width: 70, height: 70}}
        source={{uri: pok[i+1].url}}
      />
      <Text style={{fontWeight:'bold'}}>{pok[i+1].name.toUpperCase()}</Text>
      </TouchableOpacity>
      </View>
      </View>):(<View  key={i+10} ></ View>)
      
      )
})
    ) : (
      <View>
      <ActivityIndicator size="large" />
      </View>
    )}
          
          
        </View>
        </ScrollView>
    )
}

export default Home
