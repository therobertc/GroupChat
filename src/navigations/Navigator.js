import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Home from "../screens/Home";
import Discussion from "../screens/Discussion";
import Profile from "../screens/Profile";
import Chat from "../screens/Chat";
import Icon from "@expo/vector-icons/Ionicons";
import Icon2 from "@expo/vector-icons/Entypo";
import AddGroup from "../screens/Sub/AddGroup";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import UserReducer from "../screens/UserReducer";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = ({ routes }) => {
  return (
    <Tab.Navigator
      screenOptions={routes}
      tabBarOptions={{
        activeTintColor: "#f2404c",
        inactiveTintColor: "#000119",
        style: {
          height: 65,
          justifyContent: "center",
          paddingVertical: 15,
          backgroundColor: "#FFF",
          elevation: 2
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-compass" color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          screenOptions: { routes },
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="chat" color={color} size={30} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" color={color} size={30} />
          )
        }}
      />
    </Tab.Navigator>
  );
};
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false
};
const ChatStackNavigator = () => {
  return (
    <Provider store={UserReducer}>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        {/* <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='Login' component={Login} /> */}
        <Stack.Screen name="Chats" component={Chat} />
        <Stack.Screen name="Tabs" component={BottomTabNavigator} />

        <Stack.Screen name="Discussion" component={Discussion} />
        <Stack.Screen name="AddGroup" component={AddGroup} />
      </Stack.Navigator>
    </Provider>
  );
};

export default ChatStackNavigator;
