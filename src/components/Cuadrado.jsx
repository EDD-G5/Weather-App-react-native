import { View, StyleSheet } from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';


const Cuadrado = (props) => {
    const lotties = {
        lottis:{
            'humedad':require("../assets/Lotties/droplet.json"),
            'viento':require("../assets/Lotties/viento.json"),
            'visibilidad':require("../assets/Lotties/visibilidad.json"),
            'sol':require("../assets/Lotties/sunshine.json"),
        }
    }

    return (
        <View style={[
            props.left ? styles.cintaLeft: props.right ? styles.cintaRight : styles.container,
            props.style
        ]}>
            {
                props.left || props.right ?
                <View>
                    {props.children}
                </View>
                :
                <>
                    <View style={styles.subcontainer}>
                        <Lottie
                        source={lotties.lottis[props.title]}
                        autoPlay
                        loop
                        />
                    </View>
                    <View style={styles.subcontainer}>
                        {props.children}    
                    </View>
                </>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    cintaLeft:{
        flex: 1,
        alignItems:'flex-end',
        justifyContent: 'center',
        borderColor: '#22222248',
        borderWidth: 2,
        borderRightWidth: 0,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        height:'100%',
    },
    cintaRight:{
        flex:2,
        alignItems:'center',
        justifyContent: 'center',
        borderColor: '#22222248',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        height:'100%',
    },
    container:{
        flexDirection:'row',
        borderRadius:10,
        width:'45%',
        height:'45%',
        margin: 8,
        borderColor: '#22222248',
        borderWidth: 1,
        paddingHorizontal: 7,
    },
    subcontainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'50%',
        height:'100%'
    },
});

export default Cuadrado;