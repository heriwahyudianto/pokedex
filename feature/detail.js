import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

function Detail({navigation, route}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Name : {route.params.name}</Text>
          <Text>HP : {route.params.hp}</Text>
          <Text>Defense : {route.params.defense}</Text>
          <Text>Attack : {route.params.attack}</Text>
          <Text>Type : {route.params.type}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Detail;