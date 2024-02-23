import { Image, SafeAreaView, Text, View } from "react-native"
import * as Icon from "react-native-feather"
import { themeColors } from "../theme"

export const HomeScreen = () => {
    return (
        <View style={{ backgroundColor: themeColors.bg }} className="flex-1">
            {/* Logo and profile icon */}
            <SafeAreaView className="flex-row justify-between mx-4 mt-1">
                <View className="flex-row items-center space-x-1">
                    <Image
                        source={require('../assets/youtube.png')}
                        className="h-7 w-10"
                    />
                    <Text className="text-white font-semibold text-xl tracking-tighter">Youtube</Text>
                </View>
                <View className="flex-row items-center space-x-3">
                    <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
                    <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
                    <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
                    <Image 
                        source={require('../assets/perfil.png')}
                        className="h-7 w-7 rounded-full"
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}
