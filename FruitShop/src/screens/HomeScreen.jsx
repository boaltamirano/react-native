import { SafeAreaView } from "react-native-safe-area-context"
import { Bars3CenterLeftIcon, ShoppingBagIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { categories, featuredFruits } from "../constants"
import { themeColors } from "../theme"
import { useState } from "react"
import { FruitCard } from "../components/FruitCard"
import { FruitCardSales } from "../components/FruitCardSales"

export const HomeScreen = () => {

    const [activeCategory, setActiveCategory] = useState('Oranges');

    return (
        <SafeAreaView className="flex-1 bg-orange-50">
            {/* Top Bar */}
            <View className="mx-5 flex-row justify-between items-center">
                <Bars3CenterLeftIcon size="30" color="black" />
                <TouchableOpacity className="p-2 rounded-xl bg-orange-100">
                    <ShoppingCartIcon size="25" color="orange" />
                </TouchableOpacity>
            </View>

            {/* Categories section*/}
            <View className="mt-4">
                <Text style={{ color: themeColors.text }} className="text-2xl tracking-widest font-medium ml-5">Seasonal</Text>
                <Text style={{ color: themeColors.text }} className="text-3xl font-semibold ml-5">Fruits and Vegetables</Text>
                <ScrollView
                    horizontal
                    className="mt-8 px-5"
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        categories.map((category, index) => {
                            let isActive = category == activeCategory;
                            let textClass = `text-xl ${isActive ? ' font-bold' : ""}`
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setActiveCategory(category)}
                                    className="mr-8 relative"
                                >
                                    <Text style={{ color: themeColors.text }} className={textClass}>{category}</Text>
                                    {isActive && <Text className="font-extrabold text-orange-400 -mt-3 ml-2">_________</Text>}
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
            {/* Fruits Carousel */}
            <View className="mt-8">
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        featuredFruits.map((fruit, index) => <FruitCard fruit={fruit} key={index} />)
                    }
                </ScrollView>
            </View>

            {/* hot sales */}
            <View className="mt-8 pl-5 space-y-1" >
                <Text style={{color: themeColors.text}} className="text-xl font-bold">
                    Hot Sales
                </Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{overflow: 'visible'}}
                >
                    {
                        [...featuredFruits].reverse().map((fruit, index) => <FruitCardSales fruit={fruit} key={index}/>)
                    }
                </ScrollView>
            </View>

        </SafeAreaView>
    )
} 
