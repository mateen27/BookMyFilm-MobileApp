import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import { COLORS, SPACING } from "../../theme/theme";
// importing the images
import Menu from "../../images/menuu.png";
// importing API Calls
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  baseImageURL,
  topRatedTVShows,
  onAirTVShows,
  API_KEY,
} from "../../api/ApiCalls";
import InputHeader from "../../components/InputHeader";
import CategoryHeader from "../../components/CategoryHeader";
import SubMovieCards from "../../components/SubMovieCards";
import MovieCard from "../../components/MovieCard";
import TVShowCard from "../../components/TVShowCard";

// for the responsive UI
const { width, height } = Dimensions.get("window");

// fetching the movies data
const getNowPlayingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`Something went wrong in getNowPlayingMovies function`);
  }
};

const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.error(`Something went wrong in getPopularMovies function`);
  }
};

const getTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated/?api_key=${API_KEY}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(`Something went wrong in getTopRatedMovies function`);
  }
};

// fetching TV Shows
const getTVShows = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`
    );
    const data = await response.json();
    // console.log('data' , data)
    return data;
  } catch (error) {
    console.error(`Something went wrong with the getTVShows function`);
  }
};

const getTopRatedTVShows = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong with the getTopRatedTVShows function");
  }
};

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  // state variables for the API

  // for the movies
  const [nowPlayingMoviesList, setNowPlayingMoviesList] =
    useState<any>(undefined);

  const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);

  const [topRatedMoviesList, setTopRatedMoviesList] = useState<any>(undefined);

  // for the TV Shows
  const [nowPlayingTVShows, setNowPlayingTVShows] = useState<any>(undefined);

  const [topRatedTVShows, setTopRatedTVShows] = useState<any>(undefined);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const nowPlayingMovies = await getNowPlayingMovies();
        setNowPlayingMoviesList([
          { id: "dummy1" },
          ...nowPlayingMovies.results,
          { id: "dummy2" },
        ]);
      } catch (error) {
        console.error(
          `Error while fetching the data inside of the fetchNowPlaying function`
        );
      }
    };
    fetchNowPlaying();

    // popular Movies
    getPopularMovies()
      .then((popularMoviesData) => {
        setPopularMoviesList(popularMoviesData.results);
      })
      .catch((error) => {
        console.error(
          `Error while fetching the data inside of the in executing getPopularMovies function`
        );
      });

    // top rated Movies
    getTopRatedMovies()
      .then((topRated) => {
        setTopRatedMoviesList(topRated.results);
      })
      .catch((err) => {
        console.error(
          `Error while fetching the data inside of the getTopRatedMovies Movies`
        );
      });

    // on Air TV Shows
    getTVShows()
      .then((tvShows) => {
        setNowPlayingTVShows(tvShows.results);
      })
      .catch((err) => {
        console.error(
          `Error while fetching the data inside of the getTVShows in useEffect`
        );
      });

    getTopRatedTVShows()
      .then((popular) => {
        setTopRatedTVShows(popular.results);
      })
      .catch((err) => {
        console.error(
          `Error while fetching the data inside of the popularTVShows`
        );
      });
  }, []);

  // console.log('popular Movies',nowPlayingTVShows);

  const searchMoviesFunction = () => {
    // will be navigating to the SeacrhMovie Page
    navigation.navigate("Search");
  };

  // conditionally render the activity Loader
  if (
    nowPlayingMoviesList == undefined &&
    nowPlayingMoviesList == null &&
    popularMoviesList == undefined &&
    popularMoviesList == null &&
    topRatedMoviesList == undefined &&
    topRatedMoviesList == null &&
    nowPlayingTVShows == undefined &&
    nowPlayingTVShows == null &&
    topRatedTVShows == undefined &&
    topRatedTVShows == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {/* for the Search Field */}
        <View style={styles.inputHeaderContainer}>
          <InputHeader searchFunction={searchMoviesFunction} />
        </View>

        <View style={styles.activityLoaderContainer}>
          <ActivityIndicator size={"large"} color={COLORS.Orange} />
        </View>
        <StatusBar hidden />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {/* opening the drawer on Icon Click which is the HeaderComponent */}
      <HeaderComponent navigation={navigation} />
      {/* for the Search Field */}
      <View style={styles.inputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction} />
      </View>

      {/* Category Header */}
      <CategoryHeader title={"Now Playing"} />
      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        snapToInterval={width * 0.7 + SPACING.space_36}
        decelerationRate={0}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => {
          if (!item.original_title) {
            return (
              <View
                style={{
                  width: (width - (width * 0.7 + SPACING.space_36 * 2)) / 2,
                }}
              ></View>
            );
          }
          return (
            <MovieCard
              shoudlMarginatedAtEnd={true}
              cardFunction={() => {
                navigation.push("MovieDetails", { movieid: item.id });
              }}
              cardWidth={width * 0.7}
              isFirst={index == 0 ? true : false}
              isLast={index == nowPlayingMoviesList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImageURL("w780", item.poster_path)}
              genre={item.genre_ids.slice(1, 4)}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
            />
          );
        }}
      />

      <CategoryHeader title={"Popular Movies"} />
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCards
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push("MovieDetails", { movieid: item.id });
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == popularMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImageURL("w780", item.poster_path)}
          />
        )}
      />

      <CategoryHeader title={"Top Rated Movies"} />
      {/* importing FlatList for displaying Sub Cards */}
      <FlatList
        data={topRatedMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCards
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push("MovieDetails", { movieid: item.id });
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == topRatedMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImageURL("w780", item.poster_path)}
          />
        )}
      />

      {/* Category Header for the TV Shows */}
      <CategoryHeader title={"Shows"} />
      <FlatList
        data={nowPlayingTVShows} // Use results array
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        snapToInterval={width * 0.7 + SPACING.space_36}
        decelerationRate={0}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <MovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push("MovieDetails", { movieid: item.id });
            }}
            cardWidth={width * 0.7}
            isFirst={index === 0}
            isLast={index === nowPlayingTVShows.length - 1}
            title={item.name} // Use "name" instead of "title"
            imagePath={`https://image.tmdb.org/t/p/w780${item.poster_path}`} // Construct the image path with the base URL
            genre={item.genre_ids}
            vote_average={item.vote_average}
            vote_count={item.vote_count}
          />
        )}
      />

      <CategoryHeader title={"Trending Shows"} />
      <FlatList
        data={topRatedTVShows}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCards
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push("MovieDetails", { movieid: item.id });
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == topRatedTVShows?.length - 1 ? true : false}
            title={item.name}
            imagePath={baseImageURL("w780", item.poster_path)}
          />
        )}
      />

      <StatusBar hidden />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: COLORS.Black,
  },
  scrollViewContainer: {
    // flex: 1,
  },
  activityLoaderContainer: {
    flex: 1,
    alignSelf: "center", //AA2829
    justifyContent: "center",
  },
  inputHeaderContainer: {
    marginTop: SPACING.space_20,
    marginHorizontal: SPACING.space_36,
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
});

export default Home;
