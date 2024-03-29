import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { AddTripScreen } from '../screens/AddTripScreen';
import { AddExpenseScreen } from '../screens/AddExpenseScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                {/* <Stack.Screen options={{headerShown: false}} name="AddTrip" component={AddTripScreen} /> */}
                {/* <Stack.Screen options={{headerShown: false}} name="AddExpense" component={AddExpenseScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}