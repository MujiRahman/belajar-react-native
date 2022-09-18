/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {freeGames, paidGames, sliderData} from '../model/data';
import BannerSlider from '../components/BannerSlider';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';

export default function HomeScreen({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);
  const randerBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };
  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.judul}>
          <Text style={styles.nama}>Hello Muji Rahman</Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../assets/images/user-profile.jpg')}
              style={styles.imgNama}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={styles.icon}
          />
          <TextInput placeholder="Search..." style={styles.input} />
        </View>
        <View style={styles.upcoming}>
          <Text style={styles.upnama}>Upcaming Game</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.seeall}>see all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={sliderData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={randerBanner}
          key={item => item.id}
        />
        <CustomSwitch
          selectionMode={1}
          option1="Free to play"
          option2="Paid games"
          onSelectSwitch={onSelectSwitch}
        />
        {gamesTab === 1
          ? freeGames.map(item => (
              <ListItem
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                keyExtractor={item.id}
                onPress={() =>
                  navigation.navigate('GameDetail', {
                    title: item.title,
                    id: item.id,
                  })
                }
              />
            ))
          : paidGames.map(item => (
              <ListItem
                key={item.id}
                photo={item.poster}
                title={item.title}
                subTitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                keyExtractor={item.id}
                onPress={() =>
                  navigation.navigate('GameDetail', {
                    title: item.title,
                    id: item.id,
                  })
                }
              />
            ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {padding: 20},
  judul: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 2,
  },
  nama: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    textAlignVertical: 'center',
  },
  imgNama: {width: 35, height: 35},
  search: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
  },
  icon: {
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  input: {
    width: '100%',
  },
  upcoming: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upnama: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    textAlignVertical: 'center',
  },
  seeall: {
    color: '#0aada8',
  },
});
