import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment-timezone'

import Cuadrado from './Cuadrado'

const Cuadrantes = (props) => {
    const sunset =  props.data.sunset + props.data.zonaHoraria;
    const sunrise = props.data.sunrise + props.data.zonaHoraria;

    const styleBg = props.style[0];
    const styleTxt = props.style[1];


    return (
        <View style={[styles.container, styleBg]}>
            <Cuadrado title="viento" style={props.style}>
                <Text style={[styles.title, styleTxt]}>Viento</Text>
                <Text style={styleTxt}>{props.data ? props.data.velocidadViento : '_'} km/h</Text>
            </Cuadrado>
            <Cuadrado title="humedad" style={props.style}>
                <Text style={[styles.title, styleTxt]}>Humedad</Text>
                <Text style={styleTxt}>{props.data ? props.data.humedad: '_'} %</Text>
            </Cuadrado>
            <Cuadrado title="visibilidad" style={props.style}>
                <Text style={[styles.title, styleTxt]}>Visibilidad</Text>
                <Text style={styleTxt}>{props.data ? props.data.visibilidadPorciento : '_'} %</Text>
            </Cuadrado>
            <Cuadrado title="sol" style={props.style}>
                <Text style={[styles.title, styleTxt]}>Sol</Text>
                <Text style={styleTxt}>{props.data ? moment.unix(sunrise).format('hh:mm a'):'salida'}</Text>
                <Text style={styleTxt}>{props.data ? moment.unix(sunset).format('hh:mm a'):'puesta'}</Text>
            </Cuadrado>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: '100%',
        height: '50%',
    },
    title:{
        fontSize: 16,
        fontWeight:'bold',
    },
})

export default Cuadrantes;