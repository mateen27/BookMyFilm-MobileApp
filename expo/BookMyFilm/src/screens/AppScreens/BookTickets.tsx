import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// times array for the movie shows
const timeArray:string[] = [
    "10:30",
    "12:30",
    "14:30",
    "15:00",
    "16:45",
    "18:00",
    "19:30",
    "21:00",
    "23:40"
];

// generating current date and further dates..!
const generateDate = () => {
    // for generating today's date
    const date = new Date();
    // hardcoding the week day's
    let weekDay = ['Sun' , 'Mon' , 'Tue' , "Wed" , 'Thu' , 'Fri' , 'Sat'];
    let weekDays = [];
    for(let i = 0 ; i < 7 ; i++){

    }
}

const BookTickets = () => {
  return (
    <View></View>
  )
}

export default BookTickets

const styles = StyleSheet.create({})