import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, IconButton, Text } from 'react-native-paper';

const machinery = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.optionHeader}>
        <Button
          icon="filter"
          mode="elevated"
          style={styles.button}
          onPress={() => console.log('Pressed')}
        >
          Filters
        </Button>
        <Button
          icon="sort"
          mode="elevated"
          style={styles.button}
          onPress={() => console.log('Pressed')}
        >
          Sort By
        </Button>
      </View>
      {/* <View style={styles.cards}> */}
      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>
      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>
      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>

      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>

      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>


      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>


      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>

      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>


      <View style={styles.subSection}>
        <Card.Title
          style={styles.cardTitle}
          title="Printing"
          subtitle="Printing manual machine"
          right={(props) => <Feather {...props} name="printer" size={18} color="black" />}
        />
      </View>
      {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default machinery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
  },
  optionHeader: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingTop: 18
  },
  button: {
    width: 100,
    backgroundColor: "#F6F4F4",
    color: "#676767"
  },
  subSection: {
    marginVertical: 10,
    flexDirection: "column",
    gap: 4,
    borderRadius: 8,
    backgroundColor: "#FAFAFA"
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
  },
  cardTitle:{
    borderLeftColor: "green", 
    borderLeftWidth: 4,
    color: "#696969",
    paddingRight: 12,
    borderRadius: 8
  },
  cards:{
    flexDirection: "column",
    alignItems: "flex-start"
  }
});
