import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Details";

const Tab = createStackNavigator();

const NewsRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="News_Home" component={Home} />
      <Tab.Screen name="Details" component={Detail} initialParams={
        { title: "Details" }
      } />
    </Tab.Navigator>
  )
}

export default NewsRoutes;