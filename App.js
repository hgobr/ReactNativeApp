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
  Alert,
} from 'react-native';

export default function App() {
  const [value, setValue] = useState(0);
  const [hitButton, setHitButton] = useState(0);

  const onClick = () => {
    Vibration.vibrate();
    setValue(value + 5);
    setHitButton(hitButton + 1);
  };

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPress = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      Alert.alert(
        'Hey !',
        'The name must be longer than 3 characters',
        [{ text: '✅' }],
        { cancelable: true }
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <View style={styles.wrapButton}>
        <Text style={styles.Text}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={() => onClick()}>
          <Text style={styles.Text}>ADD 5️⃣</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>You hit the button {hitButton} times</Text>
      </View>
      <View style={styles.wrapSquares}>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={[styles.squareBase, styles.square01]}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.squareBase, styles.square02]}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.squareBase, styles.square03]}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.squareBase, styles.square04]}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.squareBase, styles.square05]}>
            <Text>5</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View>
        <Text style={styles.Text}>Write your name</Text>
        <TextInput
          style={styles.input}
          keyboardAppearance={'dark'}
          onChangeText={(value) => setName(value)}
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.Text}>{submitted ? 'CLEAR 🗑' : 'SEND ✏️'}</Text>
        </TouchableOpacity>
        {submitted ? <Text style={styles.Text}>Welcome {name}</Text> : null}
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
    textAlign: 'center',
  },
  wrapButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#9097C0',
    width: '100%',
    alignSelf: 'center',
  },
  wrapSquares: {
    flexDirection: 'row',
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
    backgroundColor: '#539BF3',
  },
  square02: {
    backgroundColor: '#99EDCC',
  },
  square03: {
    backgroundColor: '#CB958E',
  },
  square04: {
    backgroundColor: '#E36588',
  },
  square05: {
    backgroundColor: '#9A275A',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    margin: 5,
    width: 100,
    borderRadius: 5,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
