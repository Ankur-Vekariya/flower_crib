import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Password from './screens/Password';
import Register from './screens/Register';
import Welcome from './screens/Welcome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="login" component={Login} options={{ headerShown: false }} />
      <Tab.Screen name="register" component={Register} options={{ headerShown: false }} />
      <Tab.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="tabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="password" component={Password} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
