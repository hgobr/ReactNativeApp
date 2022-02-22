import { setStatusBarStyle, StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Vibration,
  Linking,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('React Native App');

  const onClick = () => {
    setName('Dev mobile app with Hugo');
  };
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Text style={styles.Text}>{name}</Text>
      <Button
        color="red"
        title="Update"
        onPress={() => {
          Vibration.vibrate();
          onClick();
        }}
      ></Button>
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
});
