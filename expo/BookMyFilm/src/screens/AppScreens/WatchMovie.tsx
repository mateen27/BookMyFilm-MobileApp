import { StatusBar } from 'expo-status-bar';
import { useState , useEffect } from 'react';
import { StyleSheet, Text, View , ScrollView , FlatList , Dimensions, ActivityIndicator } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'
import { WebView } from 'react-native-webview';
import { COLORS, SPACING } from '../../theme/theme';
import AppHeader from '../../components/AppHeader';
import CategoryHeader from '../../components/CategoryHeader';

import AllMovies from '../../data/AllMovies.json'
import NowPlayingMoviesData from '../../data/NowPlayingMovies.json'

import { baseImageURL } from '../../api/ApiCalls';
import MovieCard from '../../components/MovieCard';

// for the responsive UI
const { width, height } = Dimensions.get("window");

    const getAllMovies = async () => {
      try {
        // console.log('Fetching Telugu Movies...');
        //  TelguMovies;  // Assuming TelguMovies is in the expected format
        // console.log('Fetched Telugu Movies:', teluguMovies);
        return AllMovies;
      } catch (error) {
        console.error(`Error while getting AllMovies: ${error}`);
        throw error;
      }
    };

    const getNowPlaying = async () => {
      try {
        return NowPlayingMoviesData;
      } catch (error) {
        console.error(`Error while getting NowPlaying: ${error}`);
        throw error;
      }
    }

export default function WatchMovie({ navigation , route }: any) {
  const [allMovies, setAllMovies] = useState<any>(undefined);

  const [nowPlaying , setNowPlaying] = useState<any>(undefined);

  const movieName = route.params.movieName;

  // console.log(route.params);

  const selectedMovie = allMovies?.results?.find(
    (movie: any) => movie.title === movieName
  );

  // storing youtube trailer link of the movie into the variable
  const ytLink = selectedMovie?.trailerLink;

  // console.log(ytLink);
  
  

// function to navigate to MovieDetails Page in the app
const navigateToMovieDetails = (movieId: number) => {
  navigation.navigate('MovieDetails', { movieid: movieId });
};

  useEffect(() => {
    getAllMovies()
    .then((allMovie) => {
      setAllMovies(allMovie);
    })
    .catch((err) => {
      console.error(
        `Error while fetching the data inside of the AllMovies in useEffect`
      );
    });
  }, []);

  if (
    allMovies== undefined &&
    allMovies == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        // contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.activityLoaderContainer}>
          <ActivityIndicator size={"large"} color={COLORS.Orange} />
        </View>
        <StatusBar hidden />
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.appHeaderContainer}>
          <AppHeader
            name="close"
            header={`${movieName}`}
            action={() => navigation.goBack()}
          />
      </View>
      <View style = {{marginTop : '5%'}}>
        <YoutubePlayer
            height={300}
            play={false}
            videoId={ytLink}
        />
      </View>

      <View>
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
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
  activityLoaderContainer: {
    flex: 1,
    alignSelf: "center", //AA2829
    justifyContent: "center",
  },
});