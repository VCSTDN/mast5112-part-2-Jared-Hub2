import React, { useRef, useState } from "react";
import { StyleSheet, Button, TextInput, View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Formik } from "formik";

const genreList = [
  { id: "1", name: "Action and adventure", category: "Fiction", count: 0 },
  { id: "2", name: "Alternate history", category: "Fiction", count: 0 },
  { id: "3", name: "Anthology", category: "Fiction", count: 0 },
  { id: "4", name: "Chick lit", category: "Fiction", count: 0 },
  { id: "5", name: "Children", category: "Fiction", count: 0 },
  { id: "6", name: "Classic", category: "Fiction", count: 0 },
  { id: "7", name: "Comic book", category: "Fiction", count: 0 },
  { id: "8", name: "Coming-of-age", category: "Fiction", count: 0 },
  { id: "9", name: "Crime", category: "Fiction", count: 0 },
  { id: "10", name: "Drama", category: "Fiction", count: 0 },
  { id: "11", name: "Fairytale", category: "Fiction", count: 0 },
  { id: "12", name: "Fantasy", category: "Fiction", count: 0 },
  { id: "13", name: "Graphic novel", category: "Fiction", count: 0 },
  { id: "14", name: "Historical fiction", category: "Fiction", count: 0 },
  { id: "15", name: "Horror", category: "Fiction", count: 0 },
  { id: "16", name: "Mystery", category: "Fiction", count: 0 },
  { id: "17", name: "Paranormal romance", category: "Fiction", count: 0 },
  { id: "18", name: "Picture book", category: "Fiction", count: 0 },
  { id: "19", name: "Poetry", category: "Fiction", count: 0 },
  { id: "20", name: "Political thriller", category: "Fiction", count: 0 },
  { id: "21", name: "Romance", category: "Fiction", count: 0 },
  { id: "22", name: "Satire", category: "Fiction", count: 0 },
  { id: "23", name: "Science fiction", category: "Fiction", count: 0 },
  { id: "24", name: "Short story", category: "Fiction", count: 0 },
  { id: "25", name: "Suspense", category: "Fiction", count: 0 },
  { id: "26", name: "Thriller", category: "Fiction", count: 0 },
  { id: "27", name: "Western", category: "Fiction", count: 0 },
  { id: "28", name: "Young adult", category: "Fiction", count: 0 },
  { id: "29", name: "Art/architecture", category: "Non-fiction", count: 0 },
  { id: "30", name: "Autobiography", category: "Non-fiction", count: 0 },
  { id: "31", name: "Biography", category: "Non-fiction", count: 0 },
  { id: "32", name: "Business/economics", category: "Non-fiction", count: 0 },
  { id: "33", name: "Crafts/hobbies", category: "Non-fiction", count: 0 },
  { id: "34", name: "Cookbook", category: "Non-fiction", count: 0 },
  { id: "35", name: "Diary", category: "Non-fiction", count: 0 },
  { id: "36", name: "Dictionary", category: "Non-fiction", count: 0 },
  { id: "37", name: "Encyclopedia", category: "Non-fiction", count: 0 },
  { id: "38", name: "Guide", category: "Non-fiction", count: 0 },
  { id: "39", name: "Health/fitness", category: "Non-fiction", count: 0 },
  { id: "40", name: "History", category: "Non-fiction", count: 0 },
  { id: "41", name: "Home and garden", category: "Non-fiction", count: 0 },
  { id: "42", name: "Humor", category: "Non-fiction", count: 0 },
  { id: "43", name: "Journal", category: "Non-fiction", count: 0 },
  { id: "44", name: "Math", category: "Non-fiction", count: 0 },
  { id: "45", name: "Memoir", category: "Non-fiction", count: 0 },
  { id: "46", name: "Philosophy", category: "Non-fiction", count: 0 },
  { id: "47", name: "Prayer", category: "Non-fiction", count: 0 },
  { id: "48", name: "Religion, spirituality, and new age", category: "Non-fiction", count: 0 },
  { id: "49", name: "Textbook", category: "Non-fiction", count: 0 },
  { id: "50", name: "True crime", category: "Non-fiction", count: 0 },
  { id: "51", name: "Review", category: "Non-fiction", count: 0 },
  { id: "52", name: "Science", category: "Non-fiction", count: 0 },
  { id: "53", name: "Self help", category: "Non-fiction", count: 0 },
  { id: "54", name: "Sports and leisure", category: "Non-fiction", count: 0 },
  { id: "55", name: "Travel", category: "Non-fiction", count: 0 },
  { id: "56", name: "True crime", category: "Non-fiction", count: 0 },
];

export default function AddBookForm({ addBook }) {

  const [genre, setGenre] = useState("Select genre");
  const [isClicked, setIsClicked] = useState("false");
  const [data, setData] = useState(genreList);
  const searchRef = useRef();
  const onSearch = (txt) => {
    if (txt !== "") {
      let tempData = data.filter((item) => {
        return item.name.toLowerCase().indexOf(txt.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(genreList);
    }
  };

  return (
    <View styles={styles.container}>
      <Formik initialValues={{ title: "", author: "", genre: "", pages: "" }} 
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}>
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="The Book's Title: "
              onChangeText={props.handleChange("title")}
              value={props.values.title}
            />

            <TextInput
              style={styles.input}
              placeholder="Author: "
              onChangeText={props.handleChange("author")}
              value={props.values.author}
            />

            <TouchableOpacity
              style={styles.dropdownSelecter}
              onChangeText={props.handleChange("genre")}
              value={props.values.genre}
              onPress={() => {
                setIsClicked(!isClicked);
              }}
            >
              <Text>{genre}</Text>
              {isClicked ? (
                <Image source={require("../assets/dropup.png")} style={styles.icon} />
              ) : (
                <Image source={require("../assets/dropdown.png")} style={styles.icon} />
              )}
            </TouchableOpacity>
            {isClicked ? (
              <View style={styles.dropdownArea}>
                <TextInput
                ref={searchRef}
                  placeholder="Search"
                  style={styles.searchInput}
                  onChangeText={(txt) => {
                    onSearch(txt);
                  }}
                />
                <FlatList
                  data={data}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        style={styles.genreItems}
                        onPress={() => {
                          setGenre(item.name);
                          onSearch("");
                          setIsClicked(false);
                          searchRef.current.clear();
                        }}
                      >
                        <Text>{item.name}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            ) : null}

            <TextInput
              style={styles.input}
              placeholder="Pages: "
              onChangeText={props.handleChange("pages")}
              value={props.values.page}
              keyboardType="numeric"
            />

            <Button title="Submit" color="#FF8C04" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f4",
  },

  input: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginTop: 25,
    padding: 10,
    color: "black",
    fontWeight: "bold",
  },

  dropdownSelecter: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },

  icon: {
    width: 32,
    height: 32,
  },

  dropdownArea: {
    width: "90%",
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#fff",
    elevation: 5,
    alignSelf: "center",
  },

  searchInput: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 15,
  },

  genreItems: {
    width: "85%",
    height: 50,
    borderBottomWidth: 0.2,
    borderBottomColor: "#8e8e8e",
    alignSelf: "center",
    justifyContent: "center",
  },
});
