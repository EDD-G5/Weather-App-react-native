import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Cuadrado from './Cuadrado'

const Cinta = (props) => {
	const styleTxt = props.style[1];
	const styleBg = props.style[0];

	return (
		<View style={[styles.container,  styleBg]}>
			<Cuadrado left style={props.style}>
				{
				props.data?
				<Image source={{
                    uri: `http://openweathermap.org/img/wn/${props.data.icon}@4x.png`,
                }}
				style={{
					width: 100,
					height:100,
				}}/>
				: <Text>Icon Not Found</Text>
				}
			</Cuadrado>
			<Cuadrado right style={props.style}>
				<Text style={[styles.title, styleTxt]}>{props.data?props.data.cityname:'ciudad'} | {props.data?Math.round(props.data.Temp):'Temperatura'} ºC</Text>
				<Text style={[styles.text, styleTxt]}>{props.data.weather}</Text>
				<Text style={[styles.text, styleTxt]}>Max: {props.data?Math.round(props.data.maxT):'Maxima'} ºC</Text>
				<Text style={[styles.text, styleTxt]}>Min: {props.data?Math.round(props.data.minT):'Minima'}ºC</Text>
			</Cuadrado>
		</View>
	)
}

const styles = StyleSheet.create({
    container:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
        borderRadius:10,
		marginTop: '18%',
        width: '100%',
        height: '25%',
    },
	text:{
		textAlign: 'center',
		fontSize: 17,
	},
	title:{
		textAlign: 'center',
		fontSize: 22,
		fontWeight: 'bold',
	},
})

export default Cinta;