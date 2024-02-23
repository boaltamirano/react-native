import { Image, SafeAreaView, Text, View } from "react-native"
import * as Icon from "react-feather"
import { themeColors } from "../theme"

export const HomeScreen = () => {
    return (
        <View style={{backgroundColor: themeColors.bg}}>
            <SafeAreaView>
                <View>
                    {/* <Image /> */}
                    <Text>test</Text>
                </View>
                <View>
                    <Icon.Cast stroke="white" strokeWidth={1.2} height="22"/>
                </View>
            </SafeAreaView>
        </View>
    )
}
