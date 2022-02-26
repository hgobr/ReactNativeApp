import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './Page';
import Home from './Home';

export default function App() {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Page" component={Page} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
