/* eslint-disable no-unused-vars */
 import Login from "./src/Screens/login"
 import Home from "./src/Screens/home"
 import Timer from "./src/features/timer"
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateUser from "./src/Screens/createUser";


const Stack = createNativeStackNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="CreateUser" component={CreateUser} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 