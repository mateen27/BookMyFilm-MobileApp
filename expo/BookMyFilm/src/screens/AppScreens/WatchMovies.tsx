import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View , ScrollView , FlatList , ImageBackground , Dimensions, ActivityIndicator } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'
import { WebView } from 'react-native-webview';
import { COLORS, SPACING } from '../../theme/theme';
import AppHeader from '../../components/AppHeader';
import SubMovieCards from '../../components/SubMovieCards';
import CategoryHeader from '../../components/CategoryHeader';

import TelguMovies from '../../data/TelguMovies.json'
import TamilMovies from '../../data/TamilMovies.json'
import { baseImageURL } from '../../api/ApiCalls';
import InputHeader from '../../components/InputHeader';

import { useNavigation } from '@react-navigation/native';

import * as React from 'react';
import { Video, ResizeMode } from 'expo-av';
import { LinearGradient } from "expo-linear-gradient";


// for the responsive UI
const { width, height } = Dimensions.get("window");

export default function WatchMovie({ navigation, route }: any) {
  const movie_link = route.params.movieLink;
  const movie_name = route.params.movieName;
  const BgImage = route.params.bgImage;

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  // console.log(route);

// function to navigate to MovieDetails Page in the app
const navigateToMovieDetails = (movieId: number) => {
  navigation.navigate('MovieDetails', { movieid: movieId });
};

  return (
    <ScrollView style={styles.container}>
        <View style={styles.appHeaderContainer}>
          <AppHeader
            name="close"
            header={` ${movie_name}`}
            action={() => navigation.goBack()}
          />
        </View>
      <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: movie_link,
        }}
        useNativeControls //for the controllers which are coming below
        // resizeMode="contain"
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        volume={1.0}
        // width = {300}
        // showPoster = {true}
        // controls={true}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      </View>
      <StatusBar style="dark" hidden />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'black' , 
    flex : 1
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_24,
    marginTop: SPACING.space_10,
    textAlign : 'center' , 
    justifyContent : 'center' , 
    alignItems : 'center'
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
  activityLoaderContainer: {
    flex: 1,
    alignSelf: "center", //AA2829
    justifyContent: "center",
  },
  video :{
    alignSelf: 'center',
    width: '100%',
    height: 300,
  } , 
  linearGradient: {
    height: "100%",
  },
});








/*
In React Navigation, route is a prop that is automatically passed to screen components by the navigator. route contains information about the current route, including any parameters that were passed to it during navigation.

route.params is an object that holds the parameters passed to the screen when navigating to it. For example, when you navigate to a screen like this:

javascript
Copy code
navigation.navigate('ScreenName', { param1: 'value1', param2: 'value2' });
You can access param1 and param2 inside the ScreenName component using route.params. For instance:

javascript
Copy code
const { param1, param2 } = route.params;
console.log(param1); // Outputs: 'value1'
console.log(param2); // Outputs: 'value2'
In your case, when you navigate to the "WatchMovies" screen, you are passing props via navigation.push:

javascript
Copy code
navigation.push("WatchMovies", {
  bgImage: baseImageURL("w780", movieData.backdrop_path),
  posterImage: baseImageURL("original", movieData.poster_path),
  movieLink: movieLink,
  movieName: movieName
});
These props can be accessed in the "WatchMovies" screen using route.params as demonstrated earlier.

*/