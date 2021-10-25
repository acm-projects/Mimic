import React, { useEffect, Fragment } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, List, Image, ListItem, Dimensions, Button } from "react-native";
import ImageList from './imageList'

/*var user='{"userInformation":[' +
    '{"firstName": "Palak","lastName": "Bhargava","email": "Pb@gmail.com","phone": "amir@site.com","password": "123"}]}';
*/
const SettingsPage = () => {
    //const {navigate} = this.props.navigation;
    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <Fragment>
            
            <SafeAreaView style={styles.container}>
                
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.textStyle}>Caller ID:</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput style={styles.inputView}></TextInput>
                        <Button title="SUBMIT" />
                    </View>
                    <Separator />
                    <View>
                        <Text style={styles.textStyle}>Or choose from default caller IDs:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Button title="Mom" />
                            <Button title="Dad" />
                            <Button title="Work" />
                        </View>

                    </View>
                    <Separator />
                    <View>
                        <Text style={styles.textStyle}>Choose Default Image:</Text>
                    </View>
                </View>
                <ImageList />
            </SafeAreaView>
        </Fragment>

    );
};

const styles = StyleSheet.create({
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    textStyle: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 20,
    },
    inputView: {
        backgroundColor: "#E5E5E5",
        borderRadius: 30,
        width: "65%",
        height: 45,
        margin: "3%",
        alignItems: "center",
    },
    button: {
        color: '#E5E5E5',
        padding: 5,
        backgroundColor: "#E5E5E5",
    }

});

export default SettingsPage;