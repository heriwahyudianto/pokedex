import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';
import styles from '../style';

function Detail({navigation, route}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text style={[styles.sectionTitle, styles.ml10, styles.mt10]}>Attributes Detail</Text>
          <View style={[styles.listCard, styles.ml10, styles.mr10, styles.mt10]}>
            <Text>Name : {route.params.name}</Text>
            <Text>HP : {route.params.hp}</Text>
            <Text>Defense : {route.params.defense}</Text>
            <Text>Attack : {route.params.attack}</Text>
            <Text>Type : {route.params.type}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

export default Detail;
