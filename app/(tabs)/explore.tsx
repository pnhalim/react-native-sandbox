import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Link } from "expo-router";


export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={StyleSheet.compose(styles.text, styles.title)}>are you ready?</Text>
      <Text style={styles.text}>Click the button to see a random cat</Text>

      <Link href="/random cat" asChild>
      <Pressable>
        <Text style={styles.button}>click me 🙀</Text>
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
    padding: 24
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    marginTop: 24,
    marginBottom: 8,
    fontWeight: "bold"
  },
  button: {
    margin: 20,
    padding: 10,
    color: 'white',
    backgroundColor: 'purple'
  }
});

