
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginManager, useLoginList } from './StateMangement/LoginManager';
import { WhistlistManagement } from './StateMangement/WhistlistManagement';
import { NavigationProvider } from './StateMangement/NavigationProvider';
import Home from './screens/Home';
import WhistList from './screens/WhistList';
import Cart from './screens/Cart';
import ProductDescription from './screens/ProductDescription';
import FilteredProduct from './screens/FilteredProduct';
import Profile from './screens/Profile';
import Login from './screens/login/Login';
import Register from './screens/login/Register';
import Bnavigation from './Layouts/Bnavigation';
import { View,TouchableOpacity,Text } from 'react-native';
import HerbAi from './screens/HerbAi/HerbAi';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationProvider>
      <LoginManager>
        <AppContent />
      </LoginManager>
    </NavigationProvider>
  );
}

function AppContent({navigation}) {
  const { isLoggedIn, setIsLoggedIn } = useLoginList();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists, else false
    };
    checkToken();
  }, []);

  return (
    <WhistlistManagement>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
            headerRight: () => (
              <Cart />
              // <View style={{ flexDirection: 'row' }}>
              
              //   <TouchableOpacity onPress={() => {}} style={{ marginRight: 10 }}>
              //     <Text>Button 1</Text>
              //   </TouchableOpacity>
              //   <TouchableOpacity onPress={() => {}}>
              //     <Text>Button 2</Text>
              //   </TouchableOpacity>
              // </View>
            ),
            headerShown: true,
          }}>
          {isLoggedIn ? (
            <>
              <Stack.Screen name='Home' component={Home} options={{headerTitle:"Herb-Ease"}}/>
              <Stack.Screen name='Likes' component={WhistList} />
              <Stack.Screen name='Cart' component={Cart} />
              <Stack.Screen name='ProductDescription' component={ProductDescription} />
              <Stack.Screen name='FilteredProducts' component={FilteredProduct} />
              <Stack.Screen name='Profile' component={Profile} options={{
                headerTitle:"",
              } }/>
               <Stack.Screen name='AI' component={HerbAi} options={{
                headerTitle:"Fagu-AI",
              } }/>
            </>
          ) : (
            <>
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Register' component={Register} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>

    </WhistlistManagement>
  );
}
