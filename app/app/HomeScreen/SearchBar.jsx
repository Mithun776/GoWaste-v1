import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-get-random-values';
import Colors from '../utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function SearchBar() {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            paddingHorizontal: 10,
            backgroundColor: Colors.WHITE,
            borderRadius: 15,
        }}>
            <Ionicons name="location-sharp" size={24} color={Colors.GREY} style={{ paddingTop: 10 }} />
            <GooglePlacesAutocomplete
                placeholder='Search your Location'
                enablePoweredByContainer={false}
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'YOUR API KEY',    // ================ Key from Google Cloud Place API (Console) ==================== 
                    language: 'en',
                }}
            />
        </View>
    )
}