import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "../screens/Home";
import Search from "../screens/Search";
import Configs from "../screens/Configs";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Configs"
        component={Configs}
        options={{
          tabBarLabel: 'Configs',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes;