import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../styles/colors";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Configs from "../screens/Configs";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          tabBarActiveTintColor: colors.secondary,
        }
      }
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
          headerTitleStyle: {
            color: colors.tertiary,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={Home}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerTitleStyle: {
            color: colors.tertiary,
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Configs}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
          headerTitleStyle: {
            color: colors.tertiary,
            fontWeight: 'bold',
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes;