import { useNavigation } from "@react-navigation/native";
import {View , Text , Button} from 'react-native'
import { useState , useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Ticket = ({navigation , route} : any) => {
  // const navigation = useNavigation();

  const [ticketData , setTicketData] = useState<any>(route.params)

  // taking out the data from the async storage
  useEffect(() => {
    (async () => {
      try {
        const ticket = await AsyncStorage.getItem('ticket');
        if(ticket !== undefined && ticket !== null){
          setTicketData(JSON.parse(ticket))
        }
      } catch (error) {
        console.error("Something went wrong while getting the data" , error)
      }
    })()
  } , [])

  console.log('Ticket' , ticketData);
  

  return (
    <View style = {{backgroundColor : 'black' , flex : 1 , justifyContent : 'center' , alignItems : 'center'}}>
      <Text style = {{color : 'white'}}>Ticket Screen</Text>
    </View>
  );
};

export default Ticket;