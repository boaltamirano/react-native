import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import * as Icon from "react-native-feather"
import { themeColors } from "../theme"
import { categories, shortVideos, videos } from "../constants"
import { useState } from "react"
import { ShortVideoCard } from "../components/ShortVideoCard"
import { VideoCard } from "../components/VideoCard"

export const HomeScreen = () => {

    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <View style={{ backgroundColor: themeColors.bg }} className="flex-1">
            {/* Logo and profile icon */}
            <SafeAreaView className="flex-row justify-between mx-4 py-4">
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

            <ScrollView className="flex-1 -mt-2" showsVerticalScrollIndicator={false}>
                {/* categories */}
                <View className="py-2 pb-5">
                    <ScrollView className="px-4" horizontal showsHorizontalScrollIndicator={false}>
                        {
                            categories.map((category, index) => {
                                let isActive = category == activeCategory;
                                let textClass = isActive ? 'text-black' : 'text-white';
                                return (
                                    <TouchableOpacity
                                        onPress={() => setActiveCategory(category)}
                                        key={index}
                                        style={{backgroundColor: isActive ? 'white' : 'rgba(255, 255, 255, 0.1)'}}
                                        className="rounded-md p-1 px-3 mr-2"
                                    >
                                        <Text className={textClass}>{category}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>

                {/* Suggested video */}
                <VideoCard video={videos[1]} />

                {/* short videos */}
                <View className="mt-2 py-5 space-y-3 border-t-zinc-700 border-b-zinc-700 border-4 border-l-0 border-r-0">
                    <View className="mx-4 flex-row items-center space-x-2">
                        <Image 
                            source={require('../assets/short.png')}
                            className="h-6 w-5"
                        />
                        <Text className="text-white font-semibold text-lg tracking-tighter">Shorts</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="px-4"
                    >
                        {
                            shortVideos.map((item, index) => <ShortVideoCard item={item} key={index}/>)
                        }
                    </ScrollView>
                </View>

                {/* Videos */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        videos.map((video, index) => <VideoCard video={video} key={index}/>)
                    }
                </ScrollView>
            </ScrollView>
        </View>
    )
}
