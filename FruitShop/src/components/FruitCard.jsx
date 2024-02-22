import { Image, View } from "react-native"

export const FruitCard = ({ fruit }) => {
    return (
        <View
            style={{ width: 270, borderRadius: 40, backgroundColor: fruit.color(1) }}
            className="mx-5"
        >
            <View
                className="flex-row justify-center"
                style={{
                    shadowColor: fruit.shadow,
                    shadowRadius: 40,
                    shadowOffset: {width: 0, height: 50},
                    shadowOpacity: 0.6
                }}
            >
                <Image source={fruit.image} style={{width: 210, height:210}}/>
            </View>
        </View>
    )
}
