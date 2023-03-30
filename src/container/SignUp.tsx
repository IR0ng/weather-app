/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import tw from 'twrnc';

function SignUp({navigation}: {navigation: any}): JSX.Element {
  return (
    <View style={tw`flex-1 bg-[#BF75FF]`}>
      <View style={tw`flex-1`} />
      <View style={tw`flex-3 bg-[#ECECFF] rounded-[5] p-[20px]`}>
        <Text style={tw`text-[30px] font-bold`}>Sign Up</Text>
        <View>
          <Text style={tw`text-[14px] font-bold mt-[20px]`}>Full Name</Text>
          <TextInput style={tw`bg-white rounded-[10px] mt-[10px]`} />
          <Text style={tw`text-[14px] font-bold mt-[20px]`}>Email</Text>
          <TextInput style={tw`bg-white rounded-[10px] mt-[10px]`} />
          <Text style={tw`text-[14px] font-bold mt-[20px]`}>Password</Text>
          <TextInput
            style={tw`bg-white rounded-[10px] mt-[10px]`}
            secureTextEntry
          />
          <View style={tw`flex-row items-center`}>
            <CheckBox style={tw`mt-[10px] `} />
            <Text style={tw`mt-[10px]`}>
              I agree to The Terms & Conditions and Privacy Policy
            </Text>
          </View>
          <View style={tw`items-center`}>
            <TouchableOpacity
              style={tw`bg-[#EBD3E8] border-[#EBD3E8] rounded-[5px] mt-[10px] w-full h-[40px] items-center justify-center`}>
              <Text style={tw`font-bold text-[16px]`}>Create Account</Text>
            </TouchableOpacity>
            <View style={tw`mt-[10px] flex-row items-center`}>
              <View style={tw`border-t-[1px] h-[1px] flex-5`} />
              <Text style={tw`flex-1 items-center text-center font-bold`}>
                or
              </Text>
              <View style={tw`border-t-[1px] h-[1px] flex-5`} />
            </View>
            <TouchableOpacity
              style={tw`flex-row bg-[#EBD3E8] border-[#EBD3E8] rounded-[5px] mt-[10px] w-full h-[40px] items-center justify-center`}>
              <Image
                source={require('../public/img/googleIcon.png')}
                style={tw`w-[15px] h-[15px] mr-[12px]`}
              />
              <Text style={tw`font-bold text-[16px]`}>Sign up with Google</Text>
            </TouchableOpacity>
            <View style={tw`mt-[10px] flex-row justify-center items-center`}>
              <Text>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Sign-In')}
                style={tw`h-[20px]`}>
                <Text style={tw`text-[#2894FF] font-bold`}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default SignUp;
