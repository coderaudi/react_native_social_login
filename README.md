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


