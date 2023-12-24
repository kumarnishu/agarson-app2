import { Button, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "./App";


export type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: ScreenProps) {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, paddingTop: insets.top }}>
            <Text style={{ fontSize: 28 }}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('Details', { id: '1' })
                }}
            />

        </View>
    );
}