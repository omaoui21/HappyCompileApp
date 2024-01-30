import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const Header = ({navigation}) => {
  return (
    <View style={{ flexDirection: 'row',justifyContent:'space-between',padding: 16 }}>
       <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image 
       source={require('../assets/image/person.png')}
       style={{width: 50, height: 50, borderRadius: 400/ 2}} />
        </TouchableOpacity>
        <Text style={{paddingVertical: 16,paddingHorizontal:5,fontWeight:'bold',fontSize:20}}>HappyCompile</Text>
        <TouchableOpacity>
        <Image 
       source={require('../assets/image/menu.png')}
       style={{width: 40, height: 40 }} />
        </TouchableOpacity>
    </View>
  );
};

export default Header;
