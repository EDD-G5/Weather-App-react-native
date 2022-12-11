import { StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from 'expo-location';

import Landing from './Landing.jsx';
import Home from './Home.jsx';


const Stack = createNativeStackNavigator();

const Main = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
      (async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let loc = await Location.getCurrentPositionAsync({});
        setLocation(loc);
        })()

    }, []);

    let lat;
    let lon;
    let text;
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        lat = JSON.stringify(location.coords.latitude);
        lon = JSON.stringify(location.coords.longitude);
    }
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5f3d5cbee4f7935d83206f7b237fd376&units=metric`)
    		.then((response) => response.json())
        	.then((json) => setData(json))
        	.catch((error) => console.error(error))
        	.finally(() => setLoading(false));
    }, [location])
    //lat=40.4165&lon=-3.67 -- Madrid ${location.coords.longitude}

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing">
                <Stack.Screen name="Landing" options={{ headerShown: false }}>
                    {(props) => <Landing {...props} extra={isLoading}/>}
                </Stack.Screen>
				<Stack.Screen name="Home" options={{ headerShown: false, gestureEnabled: false }}>
					{(props) => <Home {...props} data={data}/>}
				</Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        marginTop: 15,
        fontSize: 15
    }
});

export default Main;