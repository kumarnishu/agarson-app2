import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "./App";


export type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function DetailsScreen({ route, navigation }: ScreenProps) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen {route.params?.id}</Text>
            <Button
                title="Go to Home"
                onPress={() => {
                    navigation.navigate('Home')
                }}
            />
        </View>
    );
}

