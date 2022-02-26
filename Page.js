import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Page({ navigation }) {
  const pressNav = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Welcome to Page</Text>
      <TouchableOpacity
        style={[styles.button, styles.changePage]}
        onPress={pressNav}
      >
        <Text style={styles.Text}>Go to Home</Text>
      </TouchableOpacity>
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

  button: {
    borderRadius: 5,
    backgroundColor: '#9097C0',
    width: '100%',
    alignSelf: 'center',
  },
  changePage: {
    margin: 5,
    width: 'auto',
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#B97375',
  },
});
