import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

const Landing = (props) => {
    const [timePassed, setTimePassed] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTimePassed(true);
        }, 6000);
        if(timePassed){
            props.navigation.replace('Home');
        }
    }, [timePassed])
    
    if (!timePassed){
        return (
            <View style={styles.container}>
                <Lottie
                source={require('../assets/Lotties/landing.json')}
                style={{
                    width: 200,
                    height: 350,
                }}
                autoPlay
                loop
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
});

export default Landing