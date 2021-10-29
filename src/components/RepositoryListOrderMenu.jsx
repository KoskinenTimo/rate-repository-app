import React from "react";
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  picker: {
    padding: 30, 
    marginLeft: 20,
  },
})
const RepositoryListOrderMenu = ({ setSelectedOrder, selectedOrder }) => {
    return (
      <View>
        <Picker
          selectedValue={selectedOrder}           
          onValueChange={(value) =>
            setSelectedOrder(value)
          }
          style={styles.picker}
          >
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item label="Highest rated repositories" value="highest" />
          <Picker.Item label="Lowest rated repositories" value="lowest" />
        </Picker>
      </View>

  );
};

export default RepositoryListOrderMenu;