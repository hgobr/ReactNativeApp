import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Vibration,
  Linking,
  Pressable,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

export default function App() {
  const [value, setValue] = useState(0);
  const [hitButton, setHitButton] = useState(0);

  const onClick = () => {
    Vibration.vibrate();
    setValue(value + 5);
    setHitButton(hitButton + 1);
  };

  const [name, setName] = useState();

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <View style={styles.wrapButton}>
        <Text style={styles.Text}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={() => onClick()}>
          <Text style={styles.Text}>ADD 5</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>You hit the button {hitButton} times</Text>
      </View>
      <View style={styles.wrapSquares}>
        <View style={[styles.squareBase, styles.square01]}>
          <Text>1</Text>
        </View>
        <View style={[styles.squareBase, styles.square02]}>
          <Text>2</Text>
        </View>
        <View style={[styles.squareBase, styles.square03]}>
          <Text>3</Text>
        </View>
      </View>
      <View>
        <Text style={styles.Text}>Write your name</Text>
        <TextInput
          style={styles.input}
          keyboardAppearance={'dark'}
          onChangeText={(i) => setName(i)}
        />
        <Text style={styles.Text}>Your name is {name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e141b',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  Text: {
    color: '#fff',
    fontSize: 25,
    margin: 10,
  },
  wrapButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#539BF3',
    margin: 5,
  },
  wrapSquares: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#fff',
  },
  squareBase: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  square01: {
    backgroundColor: '#99EDCC',
  },
  square02: {
    backgroundColor: '#CB958E',
  },
  square03: {
    backgroundColor: '#E36588',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    width: 100,
    borderRadius: 5,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
