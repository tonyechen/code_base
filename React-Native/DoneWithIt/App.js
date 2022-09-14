import { useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Button,
    Alert,
    Dimensions,
} from 'react-native';

export default function App() {
    // Detect Device Orientation Change
    // const {landscape} = useDeviceOrientation();

    // console.log(Dimensions.get('screen'))

    return (
        /* Legacy Codes / Notes / Examples
        <SafeAreaView style={styles.container}>
            <Text numberOfLines={1} onPress={() => console.log('text clicked')}>
                This is my first app!
            </Text>
            <TouchableHighlight
                onPress={() => {
                    console.log('Image Tapped');
                }}
            >
                <Image
                    source={require('./assets/icon.png')}
                    style={{ width: 100, height: 100 }}
                />
            </TouchableHighlight>
            <Button
                title="Click Me"
                onPress={() =>
                    Alert.alert('My title', 'My message', [
                        {
                            text: 'Yes',
                            onPress: () => {
                                console.log('YES');
                            },
                        },
                        {
                            text: 'No',
                            onPress: () => {
                                console.log('NO');
                            },
                        },
                    ])
                }
                color="orange"
            />
        </SafeAreaView>
        */
        <SafeAreaView
            style={{
                backgroundColor: '#fff',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
            }}
        >
            <View
                style={{
                    backgroundColor: 'dodgerblue',
                    flexBasis: 300,
                    // flexGrow: 1, == flex 1
                    // flexShrink: 1, == flex: -1
                    flex: -1,
                    height: 100,
                }}
            ></View>
            <View
                style={{ backgroundColor: 'tomato', width: 100, height: 100 }}
            ></View>
            <View
                style={{ backgroundColor: 'gold', width: 100, height: 100 }}
            ></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
