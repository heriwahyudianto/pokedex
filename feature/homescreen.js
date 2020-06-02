import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import styles from '../style';

function HomeScreen({navigation}) {
  const [selected, setSelected] = React.useState(new Map());
  const [data, setData] = React.useState([
    {key: '1', name: 'Devin', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '2', name: 'Dan', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '3', name: 'Dominic', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '4', name: 'Jackson', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '5', name: 'James', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '6', name: 'Joel', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '7', name: 'John', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '8', name: 'Jillian', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '9', name: 'Jimmy', hp: 12, defense: 12, attack: 12, type: 'melee'},
    {key: '10', name: 'Julie', hp: 12, defense: 12, attack: 12, type: 'melee'},
  ]);
  const [name, setName] = React.useState('');
  const [hp, setHp] = React.useState('');
  const [type, setType] = React.useState('');
  const [defense, setDefense] = React.useState('');
  const [attack, setAttack] = React.useState('');
  const [id, setId] = React.useState(11);

  const onDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
    return data;
  };

  const AddPokemon = () => {
    if (type !== '') {
      //mandatory
      setId(id + 1);
      setData([
        ...data,
        {
          key: id.toString(),
          name: name,
          hp: hp,
          defense: defense,
          attack: attack,
          type: type,
        },
      ]);
      return data;
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <>
          <View>
            <Text
              style={[
                styles.ml10,
                styles.mr10,
                styles.sectionTitle,
                styles.mt10,
              ]}>
              Add Pokemon
            </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={(name) => setName(name)}
              defaultValue={name}
            />
            <TextInput
              style={styles.textInput}
              placeholder="HP"
              onChangeText={(hp) => setHp(hp)}
              defaultValue={hp}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Attack"
              onChangeText={(attack) => setAttack(attack)}
              defaultValue={attack}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Defense"
              onChangeText={(defense) => setDefense(defense)}
              defaultValue={defense}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Mandatory Type"
              onChangeText={(type) => setType(type)}
              defaultValue={type}
            />
            <View style={[styles.ml10, styles.mt10, styles.mr10]}>
              <Button
                onPress={() => AddPokemon()}
                title="ADD"
                accessibilityLabel="ADD"
              />
            </View>
          </View>
          <Text style={[styles.mt30, styles.sectionTitle, styles.ml10]}>
            Pokemon List
          </Text>
          <FlatList
            style={[styles.ml10, styles.mr10, styles.mt10]}
            data={data}
            renderItem={({item}) => (
              <View style={[styles.listCard, styles.mt10, styles.flexRow]}>
                <View>
                  <Text style={[styles.sectionDescription, styles.ml10]}>
                    {item.name}
                  </Text>
                </View>
                <View>
                  <Button
                    title="Detail"
                    onPress={() =>
                      navigation.navigate('Detail', {
                        name: item.name,
                        hp: item.hp,
                        defense: item.defense,
                        attack: item.attack,
                        type: item.type,
                      })
                    }
                  />
                  <View style={[styles.mt10]}>
                    <Button title="Delete" onPress={() => onDelete(item.key)} />
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => 'key' + index}
            extraData={selected}
          />
        </>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;
