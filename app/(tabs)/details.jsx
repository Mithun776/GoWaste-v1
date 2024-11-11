import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import Colors from '../utils/Colors';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker

export default function Details() {
    const [formData, setFormData] = useState();
    const [types, setType] = useState();
    const [image, setImage] = useState(null);  // State to store the image URI

    // Handle input change for form fields
    const handleInputChange = (fieldName, fieldValue) => {
        setFormData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }));
    };

    // Request permissions for camera and gallery
    useEffect(() => {
        const requestPermissions = async () => {
            const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
            const galleryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (cameraPermission.status !== 'granted' || galleryPermission.status !== 'granted') {
                Alert.alert(
                    'Permission Required',
                    'You need to grant permissions to access the camera and gallery.'
                );
            }
        };

        requestPermissions();
    }, []);

    // Function to pick an image from the gallery
    const openImagePickerAsync = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);  // Update image state with selected image URI
            }
        } catch (error) {
            console.error('Error picking image:', error);
        }
    };

    // Function to open camera and take a new photo
    const openCameraAsync = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);  // Update image state with taken photo URI
            }
        } catch (error) {
            console.error('Error launching camera:', error);
        }
    };

    return (
        <ScrollView style={{ marginTop: 20, padding: 20 }}>
            <Text style={{
                fontFamily: 'System',
                fontSize: 25,
                marginBottom: 10,
                fontWeight: 'bold',
                color: Colors.PRIMARY,
            }}>Enter the Details</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Location *</Text>
                <TextInput
                    placeholder='Enter the Location'
                    style={styles.input}
                    value={formData?.location}  // Bind the location value
                    onChangeText={(text) => handleInputChange('location', text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Waste Type *</Text>
                <Picker
                    selectedValue={types}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) => {
                        setType(itemValue);
                        handleInputChange('wasteType', itemValue);  // Handle waste type change
                    }}>
                    <Picker.Item label="Dry Waste" value="dry" />
                    <Picker.Item label="Wet Waste" value="wet" />
                    <Picker.Item label="Metal Waste" value="metal" />
                    <Picker.Item label="Electronic Waste" value="electronic" />
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Upload Image (Optional)</Text>

                {/* Buttons to open gallery or camera */}
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity onPress={openImagePickerAsync} style={{ marginRight: 10 }}>
                        <Text style={styles.button1}>Choose from Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openCameraAsync}>
                        <Text style={styles.button1}>Take a Photo</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.label}>Photo Preview:</Text>
                <Image
                    source={image ? { uri: image } : require('./../../assets/images/image.png')}  // Show selected image or default
                    style={{
                        width: 80,
                        height: 80,
                        marginBottom: 10,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GREY,
                    }}
                />

            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={{ color: Colors.WHITE, textAlign: 'center' }}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 5,
    },
    input: {
        padding: 10,
        backgroundColor: Colors.WHITE,
    },
    label: {
        marginVertical: 5,
        fontFamily: 'System',
        marginLeft: 5,
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginVertical: 10,
    },
    button1: {
        padding: 15,
        backgroundColor: Colors.WHITE,
        color: Colors.PRIMARY,
        borderColor: Colors.GREY,
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 10,
    }
});
