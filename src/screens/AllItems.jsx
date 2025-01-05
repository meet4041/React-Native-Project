import { FlatList, StyleSheet, Text, View } from 'react-native'

const AllItems = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity</Text>
            </View>

            <FlatList

                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { backgroundColor: item.stock < 20 ? "#FFCCCC" : "#D7F6BFFF" }]}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.stock}</Text>
                    </View>
                )
                }
                contentContainerStyle={{ gap: 10 }}
            />
        </View>
    )
}

export default AllItems

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headingText: {
        fontWeight: "500",
        fontSize: 16
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 5,
    },
    itemText: {
        fontWeight: "400",
        fontSize: 15
    }

})