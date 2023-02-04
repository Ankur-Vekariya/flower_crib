import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Password from './screens/Password';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ title: 'Welcome' }} />
        <Stack.Screen name="password" component={Password} />
        <Stack.Screen name="register" component={Register} options={{ title: 'Register' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
