import { BlueButton } from '../components/customs/Button'
import { MaterialIcons } from "@expo/vector-icons"
import React, { useEffect, useRef, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { Snackbar, TextInput } from 'react-native-paper'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { useRouter } from "expo-router";
// import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { USER_SIGNUP } from '../services/user.service'
import * as SecureStore from "expo-secure-store";

const signup = () => {
    const router = useRouter()
    WebBrowser.maybeCompleteAuthSession();
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const [request, response, promptAsync] = AuthSession.useAuthRequest(
        {
            redirectUri: "https://auth.expo.io/@kartik_gupta9/trg-packages",
            clientId: `${process.env.GOOGLE_ANDROID_KEY}`,
            scopes: ['openid', 'profile', 'email'],
        },
        { authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth' }
    );


    // const [request, response, googleLogin]: any = Google.useAuthRequest({
    //     expoClientId: process.env.GOOGLE_WEB_KEY,
    //     androidClientId: process.env.GOOGLE_ANDROID_KEY,
    //     iosClientId: process.env.GOOGLE_IOS_KEY,
    //     webClientId: process.env.GOOGLE_WEB_KEY,
    //     // redirectUri: "https://auth.expo.io/@kartik_gupta9/my-app"
    // });

    useEffect(() => {
        if (response?.type === "success") {
            const credentials = response.authentication;
            // console.log({ credentials });
            // if (credentials) googleUserInfo(credentials?.accessToken, router);
        }
    }, [response]);

    const signUpHandler = async () => {
        const firstName = firstNameRef.current;
        const lastName = lastNameRef.current
        const email = emailRef.current;
        const password = passwordRef.current;
        const confirmPassword = confirmPasswordRef.current;
        console.log({
            firstNameRef: firstNameRef.current,
            lastNameRef: lastNameRef.current,
            emailRef: emailRef.current,
            passwordRef: passwordRef.current,
            confirmPasswordRef: confirmPasswordRef.current
        })

        if (!firstName || !email || !password || !confirmPassword) {
            setAlertMessage("Please fill all the mandatory fields.")
            setAlert(true);
            return;
        }
        if (passwordRef.current != confirmPasswordRef.current) {
            setAlertMessage("Password and confirm password mismatch")
            setAlert(true);
            return;
        }

        const payload = {
            email,
            password,
            firstName,
            lastName: lastName ? lastName : ''
        }

        // const saveData:any = await SecureStore.getItemAsync("userDetails");
        // console.log({saveData: JSON.parse(saveData)})
        const saveData: any = await SecureStore.setItemAsync('userDetails', JSON.stringify(payload));

        // const saveUserDetails = await USER_SIGNUP(payload);

        setAlertMessage("User account registered successfully!")
        setAlert(true)
        return router.push("/dashboard/home")
        if (saveData) {
        } else {
            setAlertMessage("Something went wrong!")
            setAlert(true)
            return;
        }
    }

    return (
        <SafeAreaView style={styles.main_container}>

            <View style={styles.company_name_container}>
                <MaterialIcons name='keyboard-arrow-left' size={30} onPress={() => router.back()} />
                <View style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Image
                            source={require("../../assets/images/trg-logo.png")}
                            style={{ height: 40, width: 40 }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.company_name}>TRG PACKAGINGS</Text>
                </View>
            </View>

            <View>
                <Text style={styles.main_text}>Welcome!</Text>
                <Text style={styles.main_text}>Register to get started!</Text>
            </View>

            <View>
                <View style={{
                    flexDirection: "row",
                    gap: 10
                }}>
                    <TextInput
                        placeholder='First name'
                        style={[{ width: "48.5%" }]}
                        mode="outlined"
                        label="First name"
                        activeOutlineColor='blue'
                        onChangeText={(text: any) => firstNameRef.current = text}
                    />
                    <TextInput
                        placeholder='Last name'
                        style={[{ width: "48.5%" }]}
                        mode="outlined"
                        label="Last name"
                        activeOutlineColor='blue'
                        onChangeText={(text: any) => lastNameRef.current = text}
                    />
                </View>
                <TextInput
                    placeholder='Email'
                    // style={styles.input_field}
                    mode="outlined"
                    label="Email"
                    activeOutlineColor='blue'
                    onChangeText={(text: any) => emailRef.current = text}
                />
                <TextInput
                    placeholder='Password'
                    // style={styles.input_field}
                    mode="outlined"
                    label="Password"
                    activeOutlineColor='blue'
                    onChangeText={(text: any) => passwordRef.current = text}
                />
                <TextInput
                    placeholder='Confirm password'
                    // style={styles.input_field}
                    mode="outlined"
                    label="Confirm password"
                    activeOutlineColor='blue'
                    onChangeText={(text: any) => confirmPasswordRef.current = text}
                />
            </View>


            <View>
                <BlueButton title="Register" customStyles={{ width: 300 }} onPress={() => signUpHandler()} />
                <Text style={styles.or_login_text}>Or login with</Text>
                <TouchableOpacity onPress={() => promptAsync()}>
                    <Text>Google</Text>
                    {/* <BlueButton title="Google" customStyles={{ width: 300 }} /> */}
                </TouchableOpacity>
            </View>

            <Snackbar
                visible={alert}
                onDismiss={() => setAlert(false)}
                action={{
                    label: 'Ok',
                    onPress: () => {
                        setAlert(false)
                        // Do something
                    },
                }}>
                {alertMessage}
            </Snackbar>

        </SafeAreaView>
    )
}

export default signup

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
    main_container: {
        paddingTop: statusBarHeight,
        paddingHorizontal: 20,
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "100%"
    },
    company_name_container: {
        flexDirection: "row",
        width: "100%",
        gap: 10,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "space-between"
    },
    company_name: {
        fontSize: 18,
        fontWeight: "700",
        color: "#007577"
    },
    main_text: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center"
    },
    input_field: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        marginBottom: 10,
        // marginHorizontal: 20,
        paddingLeft: 10
    },
    forgot_pass_text: {
        textAlign: "right"
    },
    or_login_text: {
        textAlign: "center",
        marginVertical: 10
    }
})