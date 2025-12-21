import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Pressable, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import SavedScreen from "./screens/SavedScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "./colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.active,
        tabBarInactiveTintColor: Colors.inactive,
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

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={20} color={color} />
          ),
        }}
      />
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
              backgroundColor: Colors.primary,
            },
            headerTintColor: " #fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Profile")}
                style={({ pressed }) => [
                  { borderRadius: 20 },
                  pressed && {
                    shadowColor: "#000000ff",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                    elevation: 5,
                  },
                ]}
              >
                <Image
                  source={require("./assets/favicon.png")}
                  style={{ width: 35, height: 35, borderRadius: 20 }}
                />
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
