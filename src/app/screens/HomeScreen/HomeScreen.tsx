import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Animated, Dimensions } from 'react-native';
import React, { useRef } from 'react';
import { useTheme } from '../../layouts/theme';
import { rootStyles } from './style';
import LinearGradient from 'react-native-linear-gradient';
import { AppService } from '../../services';
import { Block } from '../../libraly/component/block';
import { Icon } from 'react-native-paper';
import { Image } from 'react-native';
import Province from './data.json';
import { normalizeText, updateCurrentDate } from '../../services/AppService';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const { height } = Dimensions.get('window');

const HomeScreen = () => {
    const theme = useTheme();
    const styles = rootStyles(theme);
    const [searchText, setSearchText] = React.useState('');
    const [data, setData] = React.useState<any>({});
    const [currentDate, setCurrentDate] = React.useState<string>('');
    const [filteredData, setFilteredData] = React.useState<any[]>([]);
    const scrollY = useRef(new Animated.Value(0)).current;

    const fetchData = React.useCallback(async (lat: number, lon: number) => {
        try {
            const response: any = await AppService.getWeather(lat, lon);
            setData(response);
            setFilteredData([response]);
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
        setFilteredData(filtered);
    };

    React.useEffect(() => {
        setCurrentDate(updateCurrentDate());
        fetchData(21.0285, 105.8542);//vị trí hiện tại
    }, []);

    const renderItem = ({ item, index }: any) => {
        const inputRange = [
            (index - 1) * height,
            index * height,
            (index + 0.5) * height,
            (index + 1) * height
        ];
        const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [0, 1, 1, 0]
        });
        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [0.8, 1, 1, 0.8]
        });

        return (
            <Animated.View style={{
                opacity,
                transform: [{ scale }]
            }}>
                <Block alignItems='center'>
                    <Image
                        source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
                        style={{ width: 140, height: 140, marginBottom: -25 }}
                    />
                    <Text style={[styles.text, styles.textMain]}>{item.name}</Text>
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
                <Block alignItems='center'>
                    <Image
                        source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
                        style={{ width: 140, height: 140, marginBottom: -25 }}
                    />
                    <Text style={[styles.text, styles.textMain]}>{item.name}</Text>
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
                <Block alignItems='center'>
                    <Image
                        source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
                        style={{ width: 140, height: 140, marginBottom: -25 }}
                    />
                    <Text style={[styles.text, styles.textMain]}>{item.name}</Text>
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
                <Block alignItems='center'>
                    <Image
                        source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
                        style={{ width: 140, height: 140, marginBottom: -25 }}
                    />
                    <Text style={[styles.text, styles.textMain]}>{item.name}</Text>
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
            </Animated.View>
        );
    };


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
                <AnimatedFlatList
                    data={filteredData}
                    renderItem={renderItem}
                    keyExtractor={(item: any) => item.name}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                />
            </Block>
        </LinearGradient>
    );
}

export default HomeScreen;
