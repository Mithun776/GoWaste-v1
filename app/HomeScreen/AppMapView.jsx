import { View, StyleSheet, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import React from 'react';
import { Marker } from 'react-native-maps'

export default function Locate() {
    return (
        <View>
            <MapView style={styles.map}
                // showsUserLocation={true}
                provider={PROVIDER_GOOGLE}   // Set to GMap for both Android and iOS

                // Given the sample data we have to make the current location code
                region={{
                    latitude: 12.9716,
                    longitude: 77.5946,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
            <Marker
                coordinate={{
                    latitude: 12.9716,
                    longitude: 77.5946,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});