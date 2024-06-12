import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from "expo-router";


export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click the button to see a random cat</Text>


      <Link href="/random cat" asChild>
      <Pressable>
        <Text style={{
        padding: 10,
        color: 'white',
        backgroundColor: 'purple'
      }}>Home</Text>
      </Pressable>
      </Link>


      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  }
});
