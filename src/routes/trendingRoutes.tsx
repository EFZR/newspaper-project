import { createStackNavigator } from "@react-navigation/stack";
import TopNew from "../screens/TopNew";
import Detail from "../screens/Details";

const Tab = createStackNavigator();

const TrendingRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="News_Home" component={TopNew} />
      <Tab.Screen name="Details" component={Detail} initialParams={
        { title: "Details" }
      } />
    </Tab.Navigator>
  )
}

export default TrendingRoutes;