import { useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { HeartIcon, MinusIcon, PlusIcon } from "react-native-heroicons/solid"
import { themeColors } from "../theme"

export const FruitCardCart = ({ fruit }) => {
    return (
        <View className="flex-row justify-between items-center space-x-5 mb-5">
            <View className="mr-7">
                <TouchableOpacity
                    className="flex-row -mb-10 -ml-8 shadow-lg z-20"
                >
                    <Image source={fruit.image} style={{
                        height: 65, width: 65,
                        shadowColor: fruit.shadow,
                        overflow: 'visible',
                        shadowRadius: 15,
                        shadowOffset: { width: 0, height: 20 },
                        shadowOpacity: 0.4
                    }} />
                </TouchableOpacity>
                <View
                    style={{ backgroundColor: fruit.color(0.4), height: 60, width: 60 }}
                    className="rounded-3xl flex justify-center items-center"
                >

                </View>
            </View>
            <View className="flex-1 space-y-1">
                <Text
                    style={{ color: themeColors.text }}
                    className="text-base font-bold"
                >
                    {fruit.name}
                </Text>
                <Text className="text-yellow-500 font-extrabold">$ {fruit.price}</Text>
            </View>
            <View className="flex-row items-center space-x-2">
                <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
                    <PlusIcon size="15" color="white"/>
                </TouchableOpacity>
                <Text>{fruit.qty}</Text>
                <TouchableOpacity className="bg-gray-300 p-1 rounded-lg">
                    <MinusIcon size="15" color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
