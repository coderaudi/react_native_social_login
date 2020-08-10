import React, { useState, useEffect } from "react";
import { AccessibilityInfo, Button, View, Text, StyleSheet } from "react-native";
import {
  LoginButton, AccessToken,
  LoginManager, GraphRequest, GraphRequestManager
} from 'react-native-fbsdk';
const FacebookLogin = () => {

  const [user, setUser] = useState({});

  const initUser = (token) => {
    fetch('https://graph.facebook.com/v2.5/me?fields=email,birthday,first_name,last_name&access_token=' + token)
      .then((response) => {
        response.json().then((json) => {
          console.log("all obj keys", Object.keys(json))
          console.log("your fetch info ", JSON.stringify(json))
          setUser(json)
        })
      })
      .catch(() => {
        console.log('ERROR GETTING DATA FROM FACEBOOK')
      })


    //       Web client ID
    // 142496215537-7s74fn0o9cbhq6vd0pgppq2up4u245h1.apps.googleusercontent.com
    // Web client secret
    // Fv7EYzBKlo5BFHT6g6HkrK4g


    let refTokenUrl = `https://graph.facebook.com/v2.5/oauth/access_token?  
    grant_type=fb_exchange_token&          
    client_id=142496215537-7s74fn0o9cbhq6vd0pgppq2up4u245h1.apps.googleusercontent.com&
    client_secret=Fv7EYzBKlo5BFHT6g6HkrK4g&
    fb_exchange_token=${token}`
    fetch(refTokenUrl)
      .then(response => response.json())
      .then(data => console.log("refresh something", data)).catch(
        er => {
          console.log("unable to refresh token er", er)
        }
      )


  }


  return <View>
    <Text>LOGIN WITH FACEBOOK </Text>
    <Text>LOGIN WITH FACEBOOK /LoginButton </Text>
    <LoginButton
      permissions={['public_profile', 'email', 'user_birthday', 'user_location']}
      onLoginFinished={
        (error, result) => {
          if (error) {
            console.log("login has error: " + result.error);
          } else if (result.isCancelled) {
            console.log("login is cancelled.");
          } else {
            AccessToken.getCurrentAccessToken().then(
              (data) => {
                const { accessToken } = data
                console.log(accessToken);
                initUser(accessToken);
              }
            )
          }
        }
      }
      onLogoutFinished={() => 
      {
        console.log("logout.")
        setUser(null)
      }} />

    <Text>LOGIN WITH FACEBOOK CUSTOM BUTTON /LoginManager </Text>

    <Button
      title="Continue with fb"
      color="#4267B2"
      onPress={() => {


        LoginManager.logInWithPermissions(['public_profile', 'user_birthday', 'user_location']).then(
          function (result) {
            if (result.isCancelled) {
              console.log("Login cancelled");
            } else {

              console.log("your info ", JSON.stringify(result))
              console.log(
                "Login success with permissions: " +
                result.grantedPermissions.toString()
              );


              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  const { accessToken } = data
                  console.log("by custome btn ", accessToken);
                  // initUser(accessToken);

                  const infoRequest = new GraphRequest(
                    '/me',
                    {
                      accessToken,
                      parameters: {
                        fields: {
                          string: 'email,name,last_name,first_name,picture,gender,birthday,location',
                        },
                      },
                    },
                    (err, res) => {
                      console.log("userinfo (err, res)", err, res);
                      setUser(res);
                    }

                  );
                  new GraphRequestManager().addRequest(infoRequest).start();

                }
              )
            }
          },
          function (error) {
            console.log("Login fail with error: " + error);
          }
        );

      }}
    />


    <View>

      <Text>User Info : </Text>
      <Text>id : {user?.id}</Text>
      <Text>email : {user?.email}</Text>
      <Text>birthday : {user?.birthday}</Text>
      <Text>first_name : {user?.first_name}</Text>
      <Text>last_name : {user?.last_name}</Text>

    </View>


  </View>
}

export default FacebookLogin







