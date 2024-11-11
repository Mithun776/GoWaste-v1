import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../utils/Colors';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            // tabBarActiveTintColor: 'green',
            // tabBarInactiveTintColor: 'lightgrey',
        }}>

            <Tabs.Screen name='locate'
                options={{
                    tabBarLabel: 'Locate',
                    tabBarActiveTintColor: Colors.GREEN,
                    tabBarIcon: ({ color, size }) => <Ionicons name="location-sharp" size={size} color={color} />
                }}
            />

            <Tabs.Screen name='details'
                options={{
                    tabBarLabel: 'Details',
                    tabBarActiveTintColor: Colors.GREEN,
                    tabBarIcon: ({ color, size }) => <Ionicons name="ticket-sharp" size={size} color={color} />
                }} />

            <Tabs.Screen name='profile'
                options={{
                    tabBarLabel: 'Profile',
                    tabBarActiveTintColor: Colors.GREEN,
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-sharp" size={size} color={color} />
                }} />

        </Tabs>
    )
}