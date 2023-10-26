import { Home, AddBook, History, Genre } from './screens';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowlabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
        <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={styles.navIcon}>
                <Entypo name="home" size={32} color={focused ? "#16247d": "#111"} />
              <Text style={styles.text}></Text>
            </View>
            );
          }
        }}
        />

        <Tab.Screen 
        name='History' 
        component={History} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={styles.navIcon}>
                <FontAwesome name="history" size={32} color={focused ? "#16247d": "#111"} />
              <Text style={styles.text}></Text>
            </View>
            );
          }
        }}
        />

        <Tab.Screen 
        name='Genre' 
        component={Genre} 
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={styles.navIcon}>
                <MaterialIcons name="category" size={32} color={focused ? "#16247d": "#111"} />
              <Text style={styles.text}></Text>
            </View>
            );
          }
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  navIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    color : "#16247d",
  },
});