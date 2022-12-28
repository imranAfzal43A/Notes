import AppIntroSlider from "react-native-app-intro-slider";
import { StyleSheet, View, Text, Image } from "react-native";

const slides = [{
    key: 's1',
    text: 'My Notes',
    title: 'Wellcome to',
    image: require('../assets/note.png'),
    backgroundColor: '#20d2bb',
},
{
    key: 's2',
    title: 'Totally online',
    text: 'Based on firebase',
    image: require('../assets/fire.png'),
    backgroundColor: 'orange',
},
{
    key: 's3',
    title: 'Its all free',
    text: 'Enjoy this app',
    image: {
        uri:
            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#22bcb5',
},]

const AppintroSlider = (props) => {
    const RenderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100,
                }}>
                <Text style={styles.introTitleStyle}>{item.title}</Text>
                <Image style={styles.introImageStyle} source={item.image} />
                <Text style={styles.introTextStyle}>{item.text}</Text>
            </View>
        );
    };
    return (
        <AppIntroSlider data={slides} renderItem={RenderItem} onDone={props.onDone} showSkipButton={true}
            onSkip={props.onSkip} />
    )

}

export default AppintroSlider;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
    },
    titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
    },
    introImageStyle: {
        width: 200,
        height: 200,
    },
    introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    introTitleStyle: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: 'bold',
    },
});
