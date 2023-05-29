import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default InvoiceView = () => {
  const invoiceData = {
    invoiceNumber: "01120",
    invoiceDate: "17/05/2023",
    customerName: "Refah Tasnia",
    customerEmail: "firstuser@gmail.com",
    customerAddress: "Road 7/A, Dhanmondi, Dhaka, Bangladesh",
    items: [
      {
        id: 1,
        name: "Regular Fix",
        quantity: 2,
        price: 500,
        total: 1000,
      },
      {
        id: 2,
        name: "Car rented",
        quantity: 1,
        price: 900,

        total: 900,
      },
    ],
    total: 1900,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MECHBUD</Text>
        <Text style={styles.title}>Invoice</Text>
      </View>
      <View style={styles.invoiceInfoContainer}>
        <View style={styles.invoiceInfo}>
          <Text style={styles.label}>Invoice Number:</Text>
          <Text style={styles.text}>{invoiceData.invoiceNumber}</Text>
        </View>
        <View style={styles.invoiceInfo}>
          <Text style={styles.label}>Invoice Date:</Text>
          <Text style={styles.text}>{invoiceData.invoiceDate}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.customerInfoContainer}>
        <Text style={styles.subtitle}>Customer Information</Text>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{invoiceData.customerName}</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{invoiceData.customerEmail}</Text>
        </View>
        <View style={styles.customerInfo}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.text}>{invoiceData.customerAddress}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.itemsContainer}>
        <Text style={styles.subtitle}>Invoice Items</Text>
        {invoiceData.items.map((item) => (
          <View style={styles.item} key={item.id}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>
              {item.quantity} x BDT{item.price}
            </Text>

            <Text style={styles.itemTotal}>BDT{item.total}</Text>
          </View>
        ))}
      </View>
      <View style={styles.divider} />
      <View style={styles.totalContainer}>
        <Text style={styles.label}>Total:</Text>
        <Text style={styles.total}>BDT{invoiceData.total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 80,
  },
  header: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  invoiceInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  invoiceInfo: {
    flexDirection: "row",
  },
  label: {
    fontWeight: "bold",
  },
  text: {
    marginLeft: 5,
  },
  divider: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  customerInfoContainer: {
    marginTop: 20,
  },
  customerInfo: {
    flexDirection: "row",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemsContainer: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemDetails: {},
  itemTotal: {
    fontWeight: "bold",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
