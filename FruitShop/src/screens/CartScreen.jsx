import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import { cartItems } from "../constants";
import { FruitCardCart } from "../components/FruitCardCart";

export const CartScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-1 flex justify-between bg-orange-50">
            <View className="flex-row justify-start mx-3 mt-3">
                <TouchableOpacity
                    className="border border-gray-300 rounded-xl"
                    onPress={() => navigation.goBack()}
                >
                    <ChevronLeftIcon size="30" color="gray"/>
                </TouchableOpacity>
            </View>
            <View className="mx-5 flex-1">
                <Text 
                    style={{color: themeColors.text}}
                    className="text-2xl py-10"
                >
                    Your <Text className="font-bold">cart</Text>
                </Text>
                <View>
                    {
                        cartItems.map((fruit, index) => <FruitCardCart fruit={fruit} key={index}/>)
                    }
                </View>

                <View className="flex-row justify-end py-6 pb-10">
                    <Text className="text-lg">
                        Total price: <Text className="font-bold text-yellow-500">420.80</Text>
                    </Text>
                </View>

                <View className="flex-row justify-center mx-7">
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'orange',
                            opacity: 0.8,
                            shadowColor: 'orange',
                            shadowRadius: 25,
                            shadowOffset: {width: 0, height: 15},
                            shadowOpacity: 0.4
                        }}
                        className="p-3 flex-1 rounded-xl"
                    >
                        <Text className="text-xl text-center text-white font-bold">Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
