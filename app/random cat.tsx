import { View, Text, Image, Button } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";


export default function Details() {
  const router = useRouter();
  const navigation = useNavigation();

  const [cat, setCat] = useState({
    "id":"43o",
    "url":"https://cdn2.thecatapi.com/images/43o.jpg",
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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'white' }}>
      
      <Text>hi</Text>
      <Text>cat id: {cat.id}</Text>
      <Image
        style={{
          minHeight:200,
          minWidth:300
        }}
        source={{
          uri: cat.url,
        }}
      />
      
      {/* <Text>Details Screen</Text>

      <Link href="/home">Go to Home</Link>

      <Button
        title="Go to Details... again"
        onPress={() => router.push("/random cat")}
      />
      <Button title="Go back" onPress={() => router.back()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}


