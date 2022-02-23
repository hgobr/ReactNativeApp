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
} from 'react-native';

export default function App() {
  const [value, setValue] = useState(0);
  const [hitButton, setHitButton] = useState(0);

  const onClick = () => {
    Vibration.vibrate();
    setValue(value + 5);
    setHitButton(hitButton + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Text style={styles.Text}>{value}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onClick()}>
        <Text style={styles.Text}>ADD</Text>
      </TouchableOpacity>
      <Text style={styles.Text}>You hit the button {hitButton} times</Text>
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
  button: {
    borderRadius: 5,
    backgroundColor: '#539BF3',
    margin: 5,
  },
});
