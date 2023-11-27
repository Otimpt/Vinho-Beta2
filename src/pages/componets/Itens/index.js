import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function filtroDesc(desc){
  if(desc.length < 27){
      return desc;
  }

    return `${desc.substring(0, 22)}...`;
}

export default function Itens( {item, onClick, img} ){
    return(
        <View>
            <TouchableOpacity style={styles.container} onPress={onClick}>
                <Image
                    source={img}
                    style={styles.itemImg}
                />
                <Text style={styles.itemText}>
                    {filtroDesc(item.nome)}
                </Text>
                <View opacity={0.4}>
                    <Text style={styles.itemText}>
                        {item.cost}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemImg:{
        width: 175,
        height: 175
    },
    itemText:{
        fontSize: 16
    }
});