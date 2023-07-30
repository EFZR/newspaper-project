import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import TopNew from "../screens/TopNew";
import Configs from "../screens/Configs";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Trending 📈"
        component={TopNew}
        options={{
          tabBarLabel: "Trending",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="trending-up"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Configs"
        component={Configs}
        options={{
          tabBarLabel: "Configs",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
