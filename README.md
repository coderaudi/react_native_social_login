# react_native_social_login
react native login with google and facebook


1. login with facebook // npm  react-native-fbsdk --save
 userInfo which is returned after successful facebook sign in.
{
  "birthday": ",
  "email": "",
  "first_name": "",
  "gender": "",
  "id": "",
  "last_name": "",
  "name": "fname lname",
  "picture": {
    "data": {
      "height": 50,
      "is_silhouette": false,
      "url": "url",
      "width": 50
    }
  }
}

2. login with google // npm @react-native-community/google-signin 

 userInfo which is returned after successful google sign in.
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


