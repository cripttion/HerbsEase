
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginManager, useLoginList } from './StateMangement/LoginManager';
import { WishlistManagement } from './StateMangement/WhistlistManagement';
import { NavigationProvider } from './StateMangement/NavigationProvider';
import Home from './screens/Home';
import Cart from './screens/Cart';
import ProductDescription from './screens/ProductDescription';
import FilteredProduct from './screens/FilteredProduct';
import Profile from './screens/Profile';
import Login from './screens/login/Login';
import Register from './screens/login/Register';
import Bnavigation from './Layouts/Bnavigation';
import HerbAi from './screens/HerbAi/HerbAi';
import CheckoutCart from './screens/CheckoutCart';
import SearchedProduct from './screens/SearchedProduct';
import WishList from './screens/WishList';

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
    <WishlistManagement>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
            headerRight: () => (
              <Cart />
    
            ),
            headerShown: true,
          }}>
          {!isLoggedIn ? (
            <>
              <Stack.Screen name='Home' component={Home} options={{headerTitle:"Herb-Ease"}}/>
              <Stack.Screen name='ProductDescription' component={ProductDescription} />
              <Stack.Screen name='Cart' component={Cart} />
              <Stack.Screen name='FilteredProducts' component={FilteredProduct} />
              <Stack.Screen name='Profile' component={Profile} options={{
                headerTitle:"",
              } }/>
               <Stack.Screen name='AI' component={HerbAi} options={{
                headerTitle:"Fagu-AI",
              } }/>
                <Stack.Screen name='CheckoutCart' component={CheckoutCart} options={{
                headerTitle:"Cart",
              } }/>
              <Stack.Screen name='WishList' component={WishList} options={{
                headerTitle:"Liked By You",
              } }/>
               <Stack.Screen name='SerachResults' component={SearchedProduct} options={{
                headerTitle:"",
              } }/>
            </>
          ) : (
            <>
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name='Register' component={Register} />
                            {/* <Stack.Screen name='Home' component={Home} options={{headerTitle:"Herb-Ease"}}/> */}

            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>

    </WishlistManagement>
  );
}
