<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> dbd62063019ae9dac896a1101888c9db3f2a1752
import { View, StyleSheet, TextInput, Text, Image, Pressable } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { playSound } from "../services/soundHandler";
import { COLORS } from "../constants";

function EditWord({ route, navigation }) {
  const wordData = route.params.wordData;

  const [phonetics, setPhonetics] = useState(wordData.phonetics ?? "");
  const [partOfSpeech, setPartOfSpeech] = useState(wordData.partOfSpeech ?? "");
  const [meaning, setMeaning] = useState(wordData.meaning ?? "");

  function onSave() {
    navigation.navigate("AllWords", {
      editedWord: { ...wordData, phonetics, partOfSpeech, meaning },
    });
  }
<<<<<<< HEAD
=======

  return (
    <>
      <Image
        style={styles.image}
        source={require("../assets/edit.png")}
      />
      <View style={styles.wordRow}>
        <Text style={styles.word}>{wordData.word}</Text>
        {wordData.audio && (
          <Pressable
            style={styles.playPressable}
            onPress={() => playSound(wordData.audio)}
          >
            <Ionicons
              name="volume-medium-outline"
              size={28}
              color={COLORS.primary900}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.row}>
        <View style={[styles.inputContainer, { flex: 1 }]}>
          <Text style={styles.label}>phonetics:</Text>
          <TextInput
            style={styles.input}
            value={phonetics}
            onChangeText={setPhonetics}
          />
        </View>
        <View style={[styles.inputContainer, { flex: 1 }]}>
          <Text style={styles.label}>part of speach:</Text>
          <TextInput
            style={styles.input}
            value={partOfSpeech}
            onChangeText={setPartOfSpeech}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>meaning:</Text>
        <TextInput
          style={[styles.input, styles.meaningInput]}
          value={meaning}
          onChangeText={setMeaning}
          multiline
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={onSave}>
        <Text style={{ fontSize: 24, color: COLORS.white }}>Save</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    marginBottom: 30,
    width: "20%",
    height: undefined,
    aspectRatio: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  word: {
    fontSize: 32,
    color: COLORS.black,
  },
  playPressable: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: "row",
  },
  inputContainer: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: COLORS.grey600,
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    borderColor: COLORS.primary200,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: COLORS.black,
  },
  meaningInput: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    marginHorizontal: 12,
    borderRadius: 5,
    backgroundColor: COLORS.primary900,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditWord;
=======
function EditWord() {
>>>>>>> dbd62063019ae9dac896a1101888c9db3f2a1752

  return (
    <>
      <Image
        style={styles.image}
        source={require("../assets/edit.png")}
      />
      <View style={styles.wordRow}>
        <Text style={styles.word}>{wordData.word}</Text>
        {wordData.audio && (
          <Pressable
            style={styles.playPressable}
            onPress={() => playSound(wordData.audio)}
          >
            <Ionicons
              name="volume-medium-outline"
              size={28}
              color={COLORS.primary900}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.row}>
        <View style={[styles.inputContainer, { flex: 1 }]}>
          <Text style={styles.label}>phonetics:</Text>
          <TextInput
            style={styles.input}
            value={phonetics}
            onChangeText={setPhonetics}
          />
        </View>
        <View style={[styles.inputContainer, { flex: 1 }]}>
          <Text style={styles.label}>part of speach:</Text>
          <TextInput
            style={styles.input}
            value={partOfSpeech}
            onChangeText={setPartOfSpeech}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>meaning:</Text>
        <TextInput
          style={[styles.input, styles.meaningInput]}
          value={meaning}
          onChangeText={setMeaning}
          multiline
        />
      </View>
      <Pressable style={styles.buttonContainer} onPress={onSave}>
        <Text style={{ fontSize: 24, color: COLORS.white }}>Save</Text>
      </Pressable>
    </>
  );
}
<<<<<<< HEAD

const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    marginBottom: 30,
    width: "20%",
    height: undefined,
    aspectRatio: 1,
    alignSelf: "center",
    resizeMode: "contain",
  },
  wordRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  word: {
    fontSize: 32,
    color: COLORS.black,
  },
  playPressable: {
    marginHorizontal: 20,
  },
  row: {
    flexDirection: "row",
  },
  inputContainer: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    color: COLORS.grey600,
    marginBottom: 4,
  },
  input: {
    fontSize: 16,
    borderColor: COLORS.primary200,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: COLORS.black,
  },
  meaningInput: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    marginHorizontal: 12,
    borderRadius: 5,
    backgroundColor: COLORS.primary900,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditWord;
=======
>>>>>>> 158182f2981c4cb72c5db32ba0579b50fde70d39
>>>>>>> dbd62063019ae9dac896a1101888c9db3f2a1752
