import { Pressable, StyleSheet, Text, View } from 'react-native'
import AllItems from './AllItems'
import Create from './Create'
import { useState } from 'react'

const HomeScreen = () => {

    const [view, setview] = useState(0)
    const [data, setdata] = useState(
        [
            { id: 1, name: 'Black Tee', stock: 20, unit: "kg" },
            { id: 2, name: 'Green Tee', stock: 10, unit: "kg" },
            { id: 3, name: 'White Tee', stock: 4, unit: "kg" },
            { id: 4, name: 'Orange Tee', stock: 25, unit: "kg" },
        ]
    )
    return (
        <View style={styles.container}>
            <Text style={styles.title}>The Nuker</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, view === 0 ? { backgroundColor: "#D7F6BFFF" } : null]}
                    onPress={() => setview(0)}>
                    <Text style={[styles.buttonText, view === 0 ? { color: "gren" } : null]}>All Items</Text>
                </Pressable>
                <Pressable style={[styles.button, view === 1 ? { backgroundColor: "#FFCCCC", borderColor: "#FFCCCC" } : null]}
                    onPress={() => setview(1)}>
                    <Text style={[styles.buttonText, view === 1 ? { color: "red" } : null]}>Low Stock</Text>
                </Pressable>
                <Pressable style={[styles.button, view === 2 ? { backgroundColor: "#D7F6BFFF" } : null]}
                    onPress={() => setview(2)}>
                    <Text style={[styles.buttonText, view === 2 ? { color: "green" } : null]}>Full Stock</Text>
                </Pressable>
                <Pressable style={[styles.button, view === 3 ? { backgroundColor: "blue", borderColor: "blue" } : null]}
                    onPress={() => setview(3)}>
                    <Text style={[styles.buttonText, view === 3 ? { color: "white" } : null]}>Create</Text>
                </Pressable>
            </View>

            {view == 0 && <AllItems data={data} />}
            {view == 1 && <AllItems data={data.filter((item) => item.stock < 20)} />}
            {view == 2 && <AllItems data={data.filter((item) => item.stock >= 20)} />}
            {view == 3 && <Create data={data} setdata={setdata}/>}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: "3%",

    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "#333",

    },
    buttonContainer: {
        flexDirection: "row",
        gap: 7,
        marginVertical: 10,
    },
    button: {
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 0.8,
        borderColor: "green",
    },
    buttonText: {
        color: "green",
        fontSize: 13,
    }
})