import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { } from 'react'
import { useTheme } from '../../layouts/theme';
import { rootStyles } from './style';
import LinearGradient from 'react-native-linear-gradient';
import { AppService } from '../../services';
import { Block } from '../../libraly/component/block';
import { Icon } from 'react-native-paper';
import { Image } from 'react-native';
import Province from './data.json';
import { normalizeText, updateCurrentDate } from '../../services/AppService';

const HomeScreen = () => {
    const theme = useTheme();
    const styles = rootStyles(theme);
    const [searchText, setSearchText] = React.useState('');
    const [data, setData] = React.useState<any>({});
    const [currentDate, setCurrentDate] = React.useState<string>('');
    const [filteredData, setFilteredData] = React.useState<any>({})

    const fetchData = React.useCallback(async (lat: number, lon: number) => {
        try {
            const response: any = await AppService.getWeather(lat, lon);
            setData(response);
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleSearch = () => {
        if (!searchText.trim()) return;
        const normalizedSearchText = normalizeText(searchText);
        const filtered = Province.filter(item =>
            normalizeText(item.name).includes(normalizedSearchText)
        );
        filtered.forEach(item => {
            setFilteredData(item);
            // const intervalId = setInterval(() => {
            //     fetchData(parseFloat(item.lat), parseFloat(item.lon));
            // }, 60000);
            // return () => clearInterval(intervalId);
        });
    };

    React.useEffect(() => {
        setCurrentDate(updateCurrentDate());
        fetchData(21.0285, 105.8542);//vị trí hiện tại
        // const intervalId = setInterval(() => {
        //     fetchData(21.0285, 105.8542);
        // }, 60000);

        // return () => clearInterval(intervalId);
    }, []);

    return (
        <LinearGradient
            colors={['#47BFDF', '#4A91FF']}
            style={styles.linearGradient}
        >
            <Block block top={24}>
                <Block paddingHorizontal={24} direction='row'>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Tìm kiếm..."
                        placeholderTextColor={'#fff'}
                        value={searchText}
                        onChangeText={setSearchText}

                    />
                    <Block>
                        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
                            <Icon source="map-search-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </Block>
                </Block>
                {data.main && (
                    <Block alignItems='center'>
                        <Image
                            source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
                            style={{ width: 140, height: 140, marginBottom: -25 }}
                        />
                        <Text style={[styles.text, styles.textMain]}>{filteredData.name || 'Vị trí hiện tại'}</Text>
                        <Block padding={24} margin={24} paddingVertical={14} borderRadius={15} borderColor='#fff' border alignItems='center'>
                            <Block style={styles.overlay}>
                                <Block color='#fff' opacity={0.3} style={styles.background} />
                            </Block>
                            <Text style={[styles.text, styles.textDate]}>Today, {currentDate}</Text>
                            <Text style={[styles.text, styles.textTemp]}>{Math.round(data.main.temp - 273.15)}°C</Text>
                            <Text style={[styles.text, styles.textMain]}>{data.weather[0].main}</Text>
                            <Block>
                                <Block direction='row'>
                                    <Icon source="weather-windy" size={20} color="#fff" />
                                    <Text style={[styles.text, styles.textWindHum]}>     Wind     |     {data.wind.speed} km/h</Text>
                                </Block>
                                <Block direction='row'>
                                    <Icon source="water-outline" size={20} color="#fff" />
                                    <Text style={[styles.text, styles.textWindHum]}>     Hum      |     {data.main.humidity}%</Text>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                )}
            </Block>
        </LinearGradient>
    );
}

export default HomeScreen

