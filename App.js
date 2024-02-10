import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  let appName = "Frank's App";


  return (
    <View style={styles.container}>
      <Text>Welcome to {appName}</Text>
      <StatusBar style="auto"/>
    </View>
  );
};


/*
const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height:40}}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding:10, fontSize: 42}}>
        {
          text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')
        }
      </Text>
    </View>
  );
};

export default PizzaTranslator;
*/

//export default function App() {
/*
const Cat = props => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.container}>
      <Text>I am {props.name}, and I am {isHungry ? 'hungry':'full'}!</Text>
      <Button
        onPress = {() => {setIsHungry(false);}}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please':'Thank you!'}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default Cafe = () => {
  return (
    <>
      <Cat name="MunkuStrap" />
      <Cat name="Spot" />
    </>
  )
}
//}
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
