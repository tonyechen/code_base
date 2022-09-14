# React Native Tutorial

Link: https://www.youtube.com/watch?v=0-S5a0eXPoc

## What is it?

A frame work for building native apps useing JavaScript. Can only be used for simple apps that do not need to communicate directly with the native api of the platform.

## There are two different ways to build React Native apps

1. Expo CLI - a set of tools and a framework that sits on top of react native and abstract a lot from us. Cannot directly use the Native Features of each platform and are limited to the features that Expo gives us (not a problem with most apps).
2. React Native CLI - suitable for someone who has some experience with IOS or Android programming, will have ios and andriod 'sub projects' (should look into later)

You can always eject from expo and reveal the underlying ios and android projects

## Setting up the Dev Environment

-   install expo cli globally

```
npm i -g expo-cli
```

## Built in Component + APIs
---
Documentation Link: https://reactnative.dev/docs/components-and-apis

\<View> - function live a div

\<SafeAreaView> - same as View but add extra padding on the top to avoid contnet being covered

\<Text> - must be used for displaying text

\<Image> - used for image:

Local Image:
```JSX
<Image source={require('PATH TO IMAGE')}>
```
 Web Image:
````JSX
<Image source={{uri: 'Image Address'}}>
````

*StyleSheet* API - using StyleSheet.create({container}) checks for styling error + optimization comming in the future.
````Javascript
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
````

*Platform* Module - Help Specify Specific Styles depending on the Platform
````Javascript
Platform.OS 
````

## React Native Hooks:
github repo link: https://github.com/react-native-community/hooks

useDeviceOrientation - detect device orientation change

## Mobile Dev Notes
Density-Independent Pixels (DIPS):

Physical Pixels = DIPs * Scale Factor
