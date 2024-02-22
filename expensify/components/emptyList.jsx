import { Image, Text, View } from "react-native"

export const EmptyList = ({message}) => {
    return (
        <View className="flex justify-center items-center space-y-3">
            <Image className="w-36 h-36 shadow" source={require('../assets/images/empty.png')}/>
            <Text className="font-bold text-gray-400">{message || 'data not found'}</Text>
        </View>
    )
}
