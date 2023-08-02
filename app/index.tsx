import React, { useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View, Image } from 'react-native'
import { Link, Redirect, useRouter } from "expo-router"
import { BlueButton, WhiteButton } from './components/customs/Button'
import * as SecureStorage from "expo-secure-store";
import UserStore from './stores/user.store';

const index = () => {
  const router = useRouter();
  const userDetails = UserStore((state: any) => state.userDetails);

  const fetchUserDetails = async () => {
    const userDetails = await SecureStorage.getItemAsync("userDetails");
    if (userDetails) {
      UserStore.getState().setUserDetails(JSON.parse(userDetails))
      return router.push("/dashboard/home")
    }
    return false
  }

  useEffect(() => {
    (async () => await fetchUserDetails())()
  }, [])

  return (
    <>
      <ImageBackground
        source={require("../assets/images/trg-bg.png")}
        resizeMode='cover'
        style={styles.mainContainer}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={require("../assets/images/trg-logo.png")}
              style={{ height: 150, width: 150, alignSelf: "center" }}
            />
            <Text style={styles.mainHeading}>TRG PACKAGINGS</Text>
          </View>

          <View>

            <BlueButton title={"Log In"} customStyles={{ width: 300 }} onPress={() => router.push("/auth/signin")} />
            <WhiteButton title={"Sign Up"} customStyles={{ width: 300, marginTop: 10 }} onPress={() => router.push("/auth/signup")} />
          </View>

          {/* <Link href="/auth/signup">Signup</Link>
          <Link href="/dashboard/home">Dasboard</Link> */}

        </View>
      </ImageBackground>
    </>
  )
}

export default index

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "black"
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    textAlign: "center",
  },
  mainHeading: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    fontWeight: "900",
    marginTop: 10
  }
})