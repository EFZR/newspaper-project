import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";
import NewsRoutes from "./newsRoutes";
import TrendingRoutes from "./trendingRoutes";
import Configs from "../screens/Configs";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      initialRouteName="News"
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
      }}
    >
      <Tab.Screen
        name="Trending 📈"
        component={TrendingRoutes}
        options={{
          headerTitleStyle: {
            color: colors.tertiary,
            fontWeight: "bold",
          },
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
        name="News"
        component={NewsRoutes}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerTitleStyle: {
            color: colors.tertiary,
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Configs}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
          headerTitleStyle: {
            color: colors.tertiary,
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
