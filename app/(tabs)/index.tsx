import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={StyleSheet.compose(styles.text, styles.title)}>welcome to cat world! 😸</Text>
      <Text style={styles.text}>Go to the "explore" tab to begin your adventure</Text>
      <Text style={{color: 'grey'}}>|</Text>
      <Text style={{color: 'grey'}}>|</Text>
      <Text style={{color: 'grey'}}>V</Text>
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
    fontSize: 18
  },
  title: {
    fontSize: 24,
    marginTop: 24,
    marginBottom: 8,
    fontWeight: "bold"
  }
});
