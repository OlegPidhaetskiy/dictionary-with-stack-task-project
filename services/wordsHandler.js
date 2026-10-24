
import axios from "axios";
import { BASE_URL } from "../constants";

export async function getWordInfo(word) {
  try {
    const response = await axios.get(
      `${BASE_URL}/${encodeURIComponent(word.trim())}`
    );

    const wordInfo = response.data[0];

    if (!wordInfo) {
      return {
        word,
        partOfSpeech: "Not found",
        meaning: "No definition found for this word.",
      };
    }

    return {
      word: wordInfo.word,
      phonetics: wordInfo.phonetics?.find((item) => item.text)?.text,
      audio: wordInfo.phonetics?.find((item) => item.audio)?.audio,
      partOfSpeech: wordInfo.meanings?.[0]?.partOfSpeech,
      meaning:
        wordInfo.meanings?.[0]?.definitions?.[0]?.definition,
    };
  } catch (error) {
    return {
      word,
      partOfSpeech:
        error.response?.data?.title ?? "Error",
      meaning:
        error.response?.data?.message ??
        "Could not retrieve word information. Please try again.",
    };
  }
}
