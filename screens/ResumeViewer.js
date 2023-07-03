import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Button,
  SafeAreaView,
} from "react-native";
import { db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';

export default function ResumeBuilder() {
  const [resumeSections, setResumeSections] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const getSections = async () => {
        const sections = [];
        const querySnapshot = await getDocs(collection(db, "resume"));
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data())
          sections.push({
            title: doc.data().title,
            data: [doc.data().data],
          });
        });
    
        setResumeSections(sections);
      };
      getSections();
      console.log(resumeSections);
    }, [])
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={resumeSections}
        renderSectionHeader={({section}) => {
          return <Text style={styles.sectionHeader}>{section.title}</Text>;
        }}
        renderItem={({item}) => {
          return (
            <Text style={styles.info}>{item}</Text>
          )
        }}
        keyExtractor={(item) => {item.data}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  sectionHeader: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#EAB887',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  info: {
    color: '#fff',
    fontSize: 15,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    alignSelf: 'center',
    width: '90%'
  }
});
