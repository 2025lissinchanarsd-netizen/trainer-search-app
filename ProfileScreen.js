import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    return ( <
        View style = { styles.container } >
        <
        Image style = { styles.avatar }
        source = {
            { uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' } }
        />

        <
        Text style = { styles.label } > Name < /Text> <
        TextInput style = { styles.input }
        placeholder = "Enter your name"
        value = { name }
        onChangeText = { setName }
        />

        <
        Text style = { styles.label } > Bio < /Text> <
        TextInput style = { styles.input }
        placeholder = "Write a short bio"
        value = { bio }
        onChangeText = { setBio }
        />

        <
        Button title = "Save Profile"
        onPress = {
            () => alert("Profile Saved!") }
        /> <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20
    },
    label: {
        width: '100%',
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10
    }
});