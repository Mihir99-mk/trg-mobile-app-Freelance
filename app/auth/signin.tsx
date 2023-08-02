/**
 * TODO: Change the path of this file to auth/signin
 */

import { BlueButton } from "../components/customs/Button";
import React, { useEffect, useState } from "react";
import { Button, Image, Platform } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Text } from "react-native";

import { router } from "expo-router";

const signin = () => {
  
  return (
    <SafeAreaView style={styles.main_container}>
      <View style={styles.company_name_container}>
        <Image
          source={require("../../assets/images/trg-logo.png")}
          style={{ height: 40, width: 40 }}
        />
        <Text style={styles.company_name}>TRG PACKAGINGS</Text>
      </View>

      <View>
        <Text style={styles.main_text}>Welcome Back!</Text>
        <Text style={styles.main_text}>Glad to see you, Again!</Text>
      </View>

      <View>
        <TextInput placeholder="Hello" style={styles.input_field} />
        <TextInput placeholder="Hello" style={styles.input_field} />
        <Text style={styles.forgot_pass_text}>Forgot Password ?</Text>
      </View>

      <View>
        <BlueButton title="Login" customStyles={{ width: 300 }} />
        <Text style={styles.or_login_text}>Or login with</Text>
        <BlueButton
          title="Google"
          customStyles={{ width: 300 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default signin;

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  main_container: {
    paddingTop: statusBarHeight,
    paddingHorizontal: 20,
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
  },
  company_name_container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  company_name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#007577",
  },
  main_text: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  input_field: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 10,
    // marginHorizontal: 20,
    paddingLeft: 10,
  },
  forgot_pass_text: {
    textAlign: "right",
  },
  or_login_text: {
    textAlign: "center",
    marginVertical: 10,
  },
});
