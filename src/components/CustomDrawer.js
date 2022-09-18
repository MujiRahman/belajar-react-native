import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {AuthContex} from '../utils/Contex';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  const {Logut} = useContext(AuthContex);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={styles.imagebg}>
          <Image
            source={require('../assets/images/user-profile.jpg')}
            style={styles.img}
          />
          <Text style={styles.name}>Muji Rahman</Text>
          <View style={styles.skor}>
            <Text style={styles.nilaiSkor}>280 Coins</Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={styles.list}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomArea}>
        <TouchableOpacity onPress={() => {}} style={styles.klikOut}>
          <View style={styles.miniContainer}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={styles.share}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Logut();
          }}
          style={styles.klikOut}>
          <View style={styles.miniContainer}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.share}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {
    backgroundColor: '#8200d6',
  },
  imagebg: {padding: 20},
  img: {height: 80, width: 80, borderRadius: 40, marginBottom: 10},
  name: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  skor: {flexDirection: 'row'},
  nilaiSkor: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    marginRight: 5,
  },
  list: {flex: 1, backgroundColor: '#fff', paddingTop: 10},
  bottomArea: {padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'},
  klikOut: {paddingVertical: 15},
  miniContainer: {flexDirection: 'row', alignItems: 'center'},
  share: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
  },
});
