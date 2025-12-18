import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Pressable, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import SavedScreen from "./screens/SavedScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen name="Search" component={SearchScreen} 
      options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={20} color={color} />
          ),
        }}/>
      <Tab.Screen name="Saved" component={SavedScreen} 
      options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={20} color={color} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={({ navigation }) => ({
            title: "NewsApp",
            headerStyle: {
              backgroundColor: "#aaaa",
            },
            headerTintColor: " #fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate("Profile")}>
                <Text style={{ color: "#111", fontSize: 16 }}>Profile</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
