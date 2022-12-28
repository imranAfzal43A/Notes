import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import ShowNote from './screens/showNotes';
import AddNote from './screens/addnote';
import Icon from './components/icons';
import UpdateNote from './screens/updateNote';
import { useState } from 'react';
import AppintroSlider from './components/appintroslider';
const Tab = createBottomTabNavigator();
TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='My Note' component={ShowNote} options={{ tabBarIcon: () => (<Icon name='md-home' />), tabBarActiveTintColor: '#ebb134' }} />
      <Tab.Screen name='Add Note' component={AddNote} options={{ tabBarIcon: () => (<Icon name="add-circle" />), tabBarActiveTintColor: '#ebb134' }} />
    </Tab.Navigator>
  )
}
export default function App() {
  const [showRealapp, setShowrealApp] = useState(false)
  const onDone = () => setShowrealApp(true);
  const onSkip = () => setShowrealApp(true);
  return (
    <>
      {showRealapp ?
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name='Update Note' component={UpdateNote} />
          </Stack.Navigator>
        </NavigationContainer>
        : <AppintroSlider onDone={() => onDone()} onSkip={() => onSkip()} />
      }</>
  );
}
