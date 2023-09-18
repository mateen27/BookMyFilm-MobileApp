import { useNavigation } from "@react-navigation/native";
import {View , Text , Button} from 'react-native'

const Ticket = () => {
  const navigation = useNavigation();

  return (
    <View style = {{backgroundColor : 'black' , flex : 1}}>
      <Text>Ticket Screen</Text>
    </View>
  );
};

export default Ticket;