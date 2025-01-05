import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
const Create = ({ data, setdata }) => {

  const [itemName, setitemName] = useState('')
  const [stockAmt, setstockAmt] = useState('')
  const [isedit, setisedit] = useState(false)
  const [editItemID, seteditItemID] = useState('')

  const addItemHandler = () => {
    const newData = {
      id: Date.now(),
      name: itemName,
      stock: stockAmt
    }
    setdata([...data, newData])
    setitemName('')
    setstockAmt('')
    setisedit(false)
  }

  const deletItemHandle = (id) => {
    setdata(data.filter((item) => item.id != id))

  }
  const editItemHandler = (item) => {
    setisedit(true)
    setitemName(item.name)
    seteditItemID(item.id)
  }

  const updateItemHandler = () => {
    setdata(data.map((item) => (
      item.id == editItemID ? {
        ...item, name: item.name, stock: stockAmt
      } : item
    )))
    setitemName('')
    setstockAmt('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter an item name'
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={(item) => setitemName(item)}
      />
      <TextInput
        placeholder='Enter stock'
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        keyboardType='numeric'
        onChangeText={(stock) => setstockAmt(stock)}
      />
      <Pressable style={styles.btn} onPress={() => isedit ? updateItemHandler() : addItemHandler()}>
        <Text style={styles.btnText}>{isedit ? 'Edit Item in stock' : 'Add Item in stock'}</Text>
      </Pressable>

      <View style={styles.containerr}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All Items</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F6BFFF" }]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deletItemHandle(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )
          }
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>


  )
}

export default Create

const styles = StyleSheet.create({
  containerr: {
    marginTop: 10,
  },

  container: {
    paddingVertical: "4%",
    gap: 6,
  },
  input: {
    borderWidth: 1.25,
    borderColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  }
  , btn: {
    backgroundColor: "#CABFEEFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
  },
  headingText: {
    fontWeight: "500",
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
  },
  itemText: {
    fontWeight: "500",
    fontSize: 15
  }

})