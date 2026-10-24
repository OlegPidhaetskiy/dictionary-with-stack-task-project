import axios from "axios";

import { BASE_URL } from "../constants";

export async function getWordInfo(word) {
  try {
    const response = await axios.get(`${BASE_URL}/${word}`);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    console.log(response);
>>>>>>> 158182f2981c4cb72c5db32ba0579b50fde70d39
>>>>>>> dbd62063019ae9dac896a1101888c9db3f2a1752
    const wordInfo = response.data[0];
    return {
      word: wordInfo.word,
      phonetics: wordInfo.phonetics[0]?.text,
      audio: wordInfo.phonetics[0]?.audio,
      partOfSpeech: wordInfo.meanings[0]?.partOfSpeech,
      meaning: wordInfo.meanings[0]?.definitions[0].definition,
    };
  } catch (error) {
    return {
      partOfSpeech: error.response?.data.title,
<<<<<<< HEAD
      meaning: error.response?.data?.message,
=======
<<<<<<< HEAD
      meaning: error.response?.data?.message,
=======
      meaning: error.response.data?.message,
>>>>>>> 158182f2981c4cb72c5db32ba0579b50fde70d39
>>>>>>> dbd62063019ae9dac896a1101888c9db3f2a1752
    };
  }
}
