import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import ResumeBuilder from '../screens/ResumeBuilder'
import ResumeViewer from '../screens/ResumeViewer'

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
    return (
        <NavigationContainer>
        <Tab.Navigator initialRouteName='Builder' screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Builder') {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Viewer') {
                        iconName = focused ? 'ios-eye' : 'ios-eye-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
             tabBarActiveTintColor: '#B887EA',
             tabBarActiveBackgroundColor: '#606266',
             tabBarInactiveBackgroundColor: '#606266', 
        })}
            >
            <Tab.Screen name="Builder" options={{title: 'Resume Builder'}} component={ResumeBuilder} />
            <Tab.Screen name="Viewer" options={{title: 'Resume Viewer'}} component={ResumeViewer} />
        </Tab.Navigator>
        </NavigationContainer>
    );
}
