import React, { useState } from "react";
import { View, Text, Image, Modal, StyleSheet, Pressable } from "react-native";
import Header from "../components/header";
import { AntDesign } from "@expo/vector-icons";
import AddBook from "./addBook";
import { useTheme } from "@react-navigation/native";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [books, setBooks] = useState([
    { title: "The Witcher", Author: "Andlrez Sapkowski", genre: "Fiction", pages: 382, key: "1" } 
  ]);

  const addBook = (book) => {
    books.key = Math.random().toString();
    setBooks((currentBook) => {
      return [book, ...currentBook];
    });
    setModalOpen(false);
  };

  const [title, setTitle] = useState('Weidmin: The Last Wish');
    const [author, setAuther] = useState('Andjrez Sapkowski');
    const [pageNum, setPageNum] = useState(500);
    const [genre, setGenre] = useState('Fantasy');

    const [average,setAverage] = useState('79')
    const [total, setTotal] = useState('1098')


  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.LBRTitle}>
        <Image style={styles.LBRIcon} source={require("../assets/LSB_Icon.png")} />
        <Text style={styles.LBRTitleText}>Last Book Read:</Text>
      </View>

      <View style={styles.LBRContent}>
        <View style={styles.LBRTextView}>
          <Text style={styles.LBRText}>Title: </Text>
          <Text style={styles.LBRText}>Author: </Text>
          <Text style={styles.LBRText}>Genre: </Text>
          <Text style={styles.LBRText}>Pages: </Text>
        </View>

        <View style={styles.LBRTextView}>
          <Text style={styles.LBRText}>{title}</Text>
          <Text style={styles.LBRText}>{author}</Text>
          <Text style={styles.LBRText}>{genre}</Text>
          <Text style={styles.LBRText}>{pageNum}</Text>
        </View>
      </View>

      <View style={styles.readerInfo}>
        <View style={styles.averageBlock}>
          <Text style={styles.readerInfoText}>Average:{"\n"}</Text>
          <Text style={styles.readerInfoNum}>{average}</Text>
        </View>

        <View style={styles.totalBlock}>
          <Text style={styles.readerInfoText}>Total:{"\n"}</Text>
          <Text style={styles.readerInfoNum}>{total}</Text>
        </View>
      </View>

      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <Pressable onPress={() => setModalOpen(false)}>
            <AntDesign name="close" size={24} style={{ ...styles.modalToggle, ...styles.modalClose }} />
          </Pressable>
          <AddBook addBook={addBook} />
        </View>
      </Modal>

      <Pressable onPress={() => setModalOpen(true)}>
        <Image style={styles.modalToggle} source={require("../assets/Add.png")} />
        <Text style={styles.modalBtnText}>Add Book</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f4",
  },

  LBRIcon: {
    width: 52,
    height: 53,
    marginLeft: 15,
  },

  LBRTitle: {
    flexDirection: "row",
    paddingTop: 25,
  },

  LBRTitleText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "black",
    paddingLeft: 10,
  },

  LBRContent: {
    flexDirection: "row",
    width: 360,
    height: 225,
    borderRadius: 23,
    backgroundColor: "#d3d3d3",
    marginLeft: 20,
    margiTop: 50,
  },

  LBRTextView: {
    paddingLeft: 30,
  },

  LBRText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
    marginTop: 25,
  },

  readerInfo: {
    flexDirection: "row",
  },

  averageBlock: {
    width: 125,
    height: 135,
    borderRadius: 23,
    backgroundColor: "#FF8C04",
    marginLeft: 39,
    marginTop: 20,
  },

  totalBlock: {
    width: 125,
    height: 135,
    borderRadius: 23,
    backgroundColor: "#FF8C04",
    marginLeft: 73,
    marginTop: 20,
  },

  readerInfoText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginLeft: 25,
    marginTop: 25,
  },

  readerInfoNum: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginLeft: 25,
  },

  modalToggle: {
    width: 66,
    height: 75,
    marginBottom: 10,
    borderColor: "#f2f2f2",
    padding: 10,
    alignSelf: "center",
  },

  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },

  modalBtnText: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },

  modalContent: {
    flex: 1,
  },
});
