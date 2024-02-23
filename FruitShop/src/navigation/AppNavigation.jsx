import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen } from "../screens/HomeScreen";
import { ProductScreen } from "../screens/ProductScreen";
import { CartScreen } from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                <Stack.Screen options={{headerShown: false}} name="Product" component={ProductScreen} />
                <Stack.Screen options={{headerShown: false}} name="Cart" component={CartScreen} />
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}
