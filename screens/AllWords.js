
import {
  View,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  Text,
} from "react-native";
import { useState, useEffect } from "react";
import Item from "../components/ListItem";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../constants";

function AllWords({ route, navigation }) {
  const [myWords, setMyWords] = useState([]);

  const newWord = route?.params?.newWord;
  const editedWord = route?.params?.editedWord;

  useEffect(() => {
    const incoming = newWord ?? editedWord;

    if (!incoming?.word) return;

    setMyWords((prev) => {
      const exists = prev.some(
        (item) => item.word === incoming.word
      );

      return exists
        ? prev.map((item) =>
            item.word === incoming.word ? incoming : item
          )
        : [...prev, incoming];
    });

    // Clear navigation params after processing the word
    navigation.setParams({
      newWord: undefined,
      editedWord: undefined,
    });
  }, [newWord, editedWord, navigation]);

  function deleteWord(wordToDelete) {
    setMyWords((prev) =>
      prev.filter((item) => item.word !== wordToDelete)
    );
  }

  return (
    <>
      <Pressable
        style={styles.addPressable}
        onPress={() => navigation.navigate("AddWord")}
      >
        <Ionicons
          name="add-outline"
          size={46}
          color={COLORS.white}
        />
      </Pressable>

      <View style={{ flex: 2 }}>
        <FlatList
          data={myWords}
          renderItem={({ item }) => (
            <Item item={item} onDelete={deleteWord} />
          )}
          keyExtractor={(item) => item.word}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.textEmpty}>No words yet</Text>
            </View>
          }
          ListHeaderComponent={
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../assets/cartoon-squirrel-mike-sm.png")}
              />
            </View>
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 220,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    zIndex: 10,
  },
  addPressable: {
    position: "absolute",
    width: 60,
    borderRadius: 30,
    aspectRatio: 1,
    top: 210,
    right: "10%",
    backgroundColor: COLORS.primary900,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    elevation: 5,
  },
  image: {
    width: "45%",
    height: undefined,
    aspectRatio: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },
  empty: {
    height: 300,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
  textEmpty: {
    fontSize: 40,
    color: COLORS.primary200,
  },
});

export default AllWords;
