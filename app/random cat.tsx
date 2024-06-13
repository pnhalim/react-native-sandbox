import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";


export default function Details() {
  const router = useRouter();
  const navigation = useNavigation();

  const [cat, setCat] = useState({
    "id":"43o",
    "url":"https://static.vecteezy.com/system/resources/previews/004/473/618/original/simple-loading-process-icon-on-white-background-free-vector.jpg",
    "width":500,
    "height":354
  })

  const load_cat = () => {
    fetch('https://api.thecatapi.com/v1/images/search/')
      .then(response => response.json())
      .then(json => {
        setCat(json[0]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    load_cat()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={StyleSheet.compose(styles.text, styles.title)}>...meow</Text>
      <Text></Text>
      <Image
        style={styles.image} 
        source={{
          uri: cat.url,
        }}
      />
      <Text></Text>
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
  },
  image: {
    minHeight:200,
    minWidth:300
  }
});
