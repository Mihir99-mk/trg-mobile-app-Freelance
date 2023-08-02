
import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { Pressable, StyleSheet, Text } from "react-native"
import { IconButton } from 'react-native-paper'
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon'

const BlueButton = ({ title, width, customStyles, onPress }: any) => {
    return (
        <Pressable style={[styles.button, { width: width }, customStyles]} onPress={onPress}>
            <Text style={styles.button_innerText}>{title}</Text>
        </Pressable>
    )
}

const WhiteButton = ({ title, width, customStyles, onPress }: any) => {
    return (
        <Pressable style={[styles.white_button, { width: width }, customStyles]} onPress={onPress}>
            <Text style={styles.white_button_innerText}>{title}</Text>
        </Pressable>
    )
}

interface TaskProps {
    icon: IconSource,
    customStyles?: object | null;
    onPress?: void | undefined,
    iconColor?: string | undefined
}

const TaskButton = ({ icon, customStyles, onPress, iconColor }: TaskProps) =>{
    return(
        <Pressable>
            <IconButton icon={icon} style={[styles.Task_button, customStyles]} iconColor={iconColor} onPress={onPress} />
        </Pressable>
    )
}


export {
    BlueButton,
    WhiteButton,
    TaskButton,
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#4B71F8",
        borderRadius: 10,
        marginHorizontal: 10,
        height: 50,
        alignItems: "center",
        alignSelf: "center"
    },
    button_innerText: {
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    white_button: {
        // backgroundColor: "#fff",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 10,
        height: 50,
        alignItems: "center",
        alignSelf: "center"
    },
    white_button_innerText: {
        textAlign: "center",
        textAlignVertical: "center",
        height: "100%",
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    Task_button : {
        borderRadius: 40,
    backgroundColor: "black",
    }
})