import React, { useEffect } from 'react';
import { View, Text } from 'react-native';


import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';


const GoogleLogin = ({}) => {


  useEffect(() => {

    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/userinfo.profile'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '831416916801-t7hbe5amaja6fej57rmp6es2dg1orgmm.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });


  }, [])


  const googleUsersignInHandler = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("we have user here ", userInfo)
    } catch (error) {
      console.log("google login error", error)
      if (error) {
        // user cancelled the login flow

        // some other error happened
        console.log("we have errr", error)
      }
    }
  };

  return <View>
    <Text>
      google login
        </Text>

    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={() => googleUsersignInHandler()}
    //  disabled={this.state.isSigninInProgress}
    />

  </View>
};


export default GoogleLogin;