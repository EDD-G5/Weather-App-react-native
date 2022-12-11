import { ImageBackground, StyleSheet, View } from 'react-native';

import AppHead from '../components/AppTitle.jsx';
import Content from '../components/Content.jsx';

const Home = ({ data }) => {
    const weather = data.weather ? data.weather[0].main: 'Clear';
    const bgImage = {
        'Thunderstorm': require("../assets/backgrounds/thunderstorm.jpg"),
        'Drizzle': require("../assets/backgrounds/rain.jpg"),
        'Drizzle': require("../assets/backgrounds/drizzle.jpg"),
        'Snow': require("../assets/backgrounds/snow.jpg"),
        'Clouds': require("../assets/backgrounds/clouds.jpg"),
        'Mist': require("../assets/backgrounds/mist.jpg"),
        'Clear': require("../assets/backgrounds/clear.jpg"),
    }
    //'#15164F','#71D8F2','#F2F0DB','#AFAFAF','#DEDEDE','#1286EB',
    const Theme = weather === 'Thunderstorm' || weather === 'Rain'? [styles.darkbg, styles.lightTxt] : [styles.lightbg, styles.darkTxt];
    const HeadStyles = weather === 'Thunderstorm' || weather === 'Rain'? [{backgroundColor: '#303030'}, styles.lightTxt] : [{backgroundColor: '#a0a0b0',}, styles.darkTxt];
    
    return (
        <View style={styles.container} >
            <ImageBackground source={ 
                weather === 'Thunderstorm'? bgImage.Thunderstorm:
                weather === 'Drizzle'? bgImage.Drizzle:
                weather === 'Rain'? bgImage.Rain:
                weather === 'Snow'? bgImage.Snow:
                weather === 'Mist'? bgImage.Mist:
                weather === 'Clouds'? bgImage.Clouds: bgImage.Clear
                } style={styles.image}>
                <AppHead style={HeadStyles}/>
                <Content data={data} style={Theme}/>
            </ImageBackground>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    lightbg:{
        backgroundColor: '#a0a0b0af',
    },
	darkbg:{
        backgroundColor: '#303030ec',
	},
    lightTxt:{
        color: '#e0e0e0af'
    },
    darkTxt:{
        color: '#000000a0'
    }
});

export default Home;