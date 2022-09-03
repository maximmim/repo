import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';
import react from 'react';



let b = "й пиздець .уской федирации"
let a = "Слава УкраЇні"

var c = [0,0,0]

export default function App() {

function no() {
  console.log('Он не любит пельмени :(');
  alert("Казинить !")
  c[1] = c[1] + 1
}

function yes() {
  console.log('Он любит пельмени');
  c[0] = c[0] + 1
}



function yesd() {
console.log('Он ОЧЕНЬ ЛЮЮБИТ ПЕЛЬМЕНИ ');
c[2] = c[2] + 1

}




  const createThreeButtonAlert = () =>
    Alert.alert('Ти полюбляєш пельмені ?', '', [
      {
        text: 'оооо ма гакк',
        onPress: () => yes(),
      },
      {
        text: 'Ні',
        onPress: () => no(),
        style: 'cancel',
      },
      { text: 'ДУЖЕ ПОЛЮБЛЯЮ', onPress: () =>  yesd()},
    ]);

function telega() {
 alert(b)
 alert(a);
}
function dod() {
  console.log("Промовили Так:"+ " " + c[0],)
  console.log("Промовили Ні:"+ " " + c[1],)
  console.log("Промовили що дуже люблять:"+ " " + c[2],)

}


  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Button onPress={createThreeButtonAlert} title="Опитуваня"/>
      <Text onPress={dod} style={styles.f}>Результати</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  s: {
    top: -120,
    fontSize: 17,
   },
   f: {
    top: 220,
    fontSize: 20,
   }
});
