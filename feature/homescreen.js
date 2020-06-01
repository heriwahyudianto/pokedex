import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import styles from '../style';

function Item({id, title, selected, onSelect}) {
  return (
    <TouchableOpacity onPress={() => onSelect(id)}>
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  );
}

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
  const onSelect = (key) => {
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
            <Text>Add Pokemon</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}
              placeholder="Name"
              onChangeText={(name) => setName(name)}
              defaultValue={name}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}
              placeholder="HP"
              onChangeText={(hp) => setHp(hp)}
              defaultValue={hp}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}
              placeholder="Attack"
              onChangeText={(attack) => setAttack(attack)}
              defaultValue={attack}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}
              placeholder="Defense"
              onChangeText={(defense) => setDefense(defense)}
              defaultValue={defense}
            />
            <TextInput
              style={{
                height: 40,
                borderColor: 'red',
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
                marginTop: 10,
              }}
              placeholder="Mandatory Type"
              onChangeText={(type) => setType(type)}
              defaultValue={type}
            />
            <Button
              onPress={() => AddPokemon()}
              title="ADD"
              color="#841584"
              accessibilityLabel="ADD"
            />
          </View>
          <FlatList
            style={{marginTop: 30}}
            data={data}
            renderItem={({item}) => (
              <View style={styles.flexRow}>
                <View>
                  <Text>{item.name}</Text>
                </View>
                <View style={[{width: 150}]}>
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
                </View>
                <View style={styles.width50}>
                  <Item
                    id={item.key}
                    title={item.name}
                    selected={!!selected.get(item.key)}
                    onSelect={onSelect}
                  />
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
