# react_native_social_login
react native login with google and facebook

> login with facebook // npm  react-native-fbsdk --save

{
        birthday: string,
        email: string,
        first_name: string,
        gender: string,
        id: string,
        last_name:string,
        name:string,
        picture": {   }
}

> login with google // npm @react-native-community/google-signin 

#GOOGLE SIGN IN WITH FIREBASE 

#VIDEO LINK TO LOGIN WITH GOOGLE IN REACT-NATIVE : https://youtu.be/SdYp5JdMvs0
#BLOG LINK TO : https://www.pradipdebnath.com/2020/10/06/how-to-implement-google-login-in-react-native-with-firebase/



    {
        idToken: string,
        serverAuthCode: string,
        scopes: Array<string>, // on iOS this is empty array if no additional scopes are defined
        user: {
            email: string,
            id: string,
            givenName: string,
            familyName: string,
            photo: string, // url
            name: string // full name
        }
    }

![](https://github.com/coderaudi/react_native_social_login/blob/sociallogin/help/login.PNG)


