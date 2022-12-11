import { StyleSheet, View, Text } from "react-native";

import Cinta from './Cinta.jsx'
import Cuadrantes from './Cuadrantes.jsx'

const Content = (props) => {
    const styleBg = props.style[0];
    const styleTxt = props.style[1];

    const dataCinta = {
        'cityname': props.data.name,
        'Temp': props.data.main.temp,
        'minT': props.data.main.temp_min,
        'maxT': props.data.main.temp_max,
        'weather': props.data.weather[0].main,
        'icon': props.data.weather[0].icon,
    }
    const dataCintaFail = {
        'cityname': '_',
        'Temp': '_',
        'minT': '_',
        'maxT': '_',
        'weather': '_',
        'icon': '_',
    }

    const dataCuadrantes ={
        'velocidadViento': props.data.wind.speed,
        'humedad': props.data.main.humidity,
        'visibilidadPorciento': props.data.visibility/100,
        'sunrise': props.data.sys.sunrise,
        'sunset': props.data.sys.sunset,
        'zonaHoraria': props.data.timezone,
    }
        
    const dataCuadrantesFail = {
        'velocidadViento': '_',
        'humedad': '_',
        'visibilidadPorciento': '_',
        'sunrise': '_',
        'sunset': '_',
        'zonaHoraria': '_',
    }
        
    

    return (
        <>
            <View style={styles.container}>
                {/* <Text>{JSON.stringify(props.data)}</Text> */}
                <View style={styles.subcontainer}>
                    <Text style={[styles.coords, styleTxt]}>{props.data.coord.lat} | {props.data.coord.lon}</Text>
                    <Cinta data={dataCinta.weather? dataCinta: dataCintaFail} style={props.style}/>
                    <Cuadrantes data={dataCuadrantes.humedad? dataCuadrantes:dataCuadrantesFail} style={props.style}/>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    subcontainer:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-around',
        width: '100%',
    },
    coords:{
        fontSize: 11,
        borderWidth: 1,
        borderColor: '#555a',
        paddingHorizontal: 18,
        paddingVertical: 1,
        borderRadius:15,
    },
});

export default Content;
