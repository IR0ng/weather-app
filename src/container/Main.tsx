/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

function Main({navigation}: {navigation: any}): JSX.Element {
  return (
    <View style={tw`flex-1 bg-[#BF75FF]`}>
      <View style={tw`flex-2`} />
      <View
        style={tw`flex-2 bg-[#ECECFF] rounded-t-[5] justify-center items-center`}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sign-Up')}
            style={tw`border=[0.5px] rounded-[5] w-[150px] h-[40px] justify-center items-center mb-[20px]`}>
            <Text style={tw`font-bold text-[#613030]`}>Go to Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Sign-In')}
            style={tw`border=[0.5px] rounded-[5] w-[150px] h-[40px] justify-center items-center`}>
            <Text style={tw`font-bold text-[#613030]`}>Go to Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Main;
