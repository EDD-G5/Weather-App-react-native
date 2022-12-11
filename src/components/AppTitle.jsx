import { StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

const AppTitle = (props) => {
    const styleBg = props.style[0];
    const styleTxt = props.style[1];
    return (
        <>
            <View style={[styles.appTitleContainer, styles.appTitle, styleBg]}>
                <Lottie
                source={require('../assets/Lotties/landing.json')}
                style={{
                    // borderWidth:1,
                    height: '80%',
                }}
                autoPlay
                loop
                />
            </View>
        </>
    );
}
  
const styles = StyleSheet.create({
    appTitleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        top: 0,
        left: 0, 
        height: '15%',
        paddingTop: 30,
    },
    appTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
    },
});

export default AppTitle;