import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme";
import StarRating from 'react-native-star-rating';

export const ProductScreen = (props) => {

    let fruit = props.route.params;
    const navigation = useNavigation();

    return (
        <View className="flex-1" style={{ backgroundColor: fruit.color }}>
            <SafeAreaView>
                <View className="flex-row justify-start mx-3 mt-3">
                    <TouchableOpacity 
                        style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}
                        className="border border-gray-50 rounded-xl"
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeftIcon size="30" color="#8f8f8f" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-5 pb-10"
                    style={{
                        shadowColor: fruit.shadow,
                        shadowRadius: 50,
                        shadowOffset: {width: 0, height: 50},
                        shadowOpacity: 0.7
                    }}
                >
                    <Image source={fruit.image} style={{width: 290, height: 290}}/>
                </View>
            </SafeAreaView>
            <View
                style={{borderTopLeftRadius: 45, borderTopRightRadius: 45}}
                className="bg-orange-50 flex-1 px-6 spcae-y-2"
            >
                <Text style={{color: themeColors.text}} className="mt-8 text-2xl font-bold">
                    {fruit.name}
                </Text>
                <View className="flex-row justify-between mb-3">
                    <Text className="text-gray-500 font-semibold">{fruit.desc}</Text>
                    <Text className="text-gray-500 font-semibold">
                        Sold <Text className="text-gray-800 font-extrabold">239</Text>
                    </Text>
                </View>
                <StarRating 
                    disabled={true}
                    starSize={18}
                    containerStyle={{width: 120}}
                    maxStars={5}
                    rating={fruit.starts}
                    emptyStartColor="lightgray"
                    fullStar={fruit.image}
                />
                <View style={{height: 165}}>
                    <Text style={{color: themeColors.text}} className="tracking-wider py-3">
                        La naranja es el fruto del naranjo dulce, árbol que pertenece al género Citrus de la familia de las Rutáceas. Esta familia comprende más de 1.600 especies. El género botánico Citrus es el más importante de la familia, y consta de unas 20 especies con frutos comestibles todos ellos muy abundantes en vitamina C, flavonoides y aceites esenciales.
                    </Text>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-3xl">$ {fruit.price}</Text>
                    <TouchableOpacity 
                        className="text-3xl p-3 ml-6 flex-1 rounded-xl"
                        style={{
                            backgroundColor: fruit.shadow,
                            opacity: 0.6,
                            shadowColor: fruit.shadow,
                            shadowRadius: 25,
                            shadowOffset: {width: 0, height: 15},
                            shadowOpacity: 0.5
                        }}
                    >
                        <Text className="text-xl text-center text-white font-bold">Add To cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
