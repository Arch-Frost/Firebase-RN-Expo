import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { db } from "../config/Firebase";
import { addDoc, collection } from "firebase/firestore";

export default function ResumeBuilder() {
  const [heading, setHeading] = useState("");
  const [info, setInfo] = useState("");

  // const fieldUpdate = {
  //         [heading]: info,
  // }

  // const userRef = doc(db, 'resume', 'rLcdjquayJ86QLQunW6o')

  // const addSection = async () => {
  //     await updateDoc(userRef, fieldUpdate).then(() => {
  //         console.log('Section Added!');
  //     }).catch((error) => {
  //         console.error('Error adding section: ', error);
  //     })
  // }

  const saveSection = async () => {
    if (heading.trim() === "" || info.trim() === "") {
      Alert.alert('Fields cannot be empty. Please try again!')
      return;
    }

    // Create a new document with a random unique ID in the "resumeSections" collection
    const docRef = await addDoc(collection(db, "resume"), {
      title: heading,
      data: info,
    })
      .then(() => {
        Alert.alert('Section Added Successfully!', 'Go to Resume Viewer to view your changes.')
        console.log("Section Saved Successfully!");
      })
      .catch((err) => {
        Alert.alert("An unexpected error occurred while adding the section!")
        console.error("Error saving section: ", err);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.text}>Add Sections to your Portfolio </Text>

      <TextInput
        style={styles.sectionHeading}
        placeholder="Section Heading"
        onChangeText={(heading) => setHeading(heading)}
      />

      <TextInput
        style={styles.sectionInfo}
        placeholder="Add Information"
        onChangeText={(info) => setInfo(info)}
        multiline={true}
        numberOfLines={10}
      />

      <View style={styles.button}>
        <Button title="Add Section" color={"#B887EA"} onPress={saveSection} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "white",
  },
  sectionHeading: {
    height: 50,
    width: "90%",
    marginTop: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  sectionInfo: {
    height: "40%",
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    width: "90%",
    margin: 12,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
