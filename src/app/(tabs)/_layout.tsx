import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarShowLabel: false }}>
            {/* home */}
            <Tabs.Screen 
                name="index" 
                options={{
                    headerTitle: 'For you',
                    tabBarIcon: ({color}) =>( 
                        <FontAwesome name='home' size={28} color={color} />
                    ),
                }}
            />

            {/* new */}
            <Tabs.Screen 
                name="new" 
                options={{
                    headerTitle: 'For you',
                    tabBarIcon: ({color}) =>( 
                        <FontAwesome name='plus-square-o' size={28} color={color} />
                    ),
                }}
            />

            {/* profile */}
            <Tabs.Screen 
                name="profile" 
                options={{
                    headerTitle: 'For you',
                    tabBarIcon: ({color}) =>( 
                        <FontAwesome name='user' size={28} color={color} />
                    ),
                }}
            />
        </Tabs>
    )
}