import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import ProfileScreen from '../Screens/ProfileScreen';
import DetailScreen from '../Screens/DetailScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexColumn}>
        <View>
          <Text style={styles.text}>Location</Text>
          <Text style={styles.location}>Bilzen, Tanjungbalai</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('profil')}>
          <Image
            source={require('../img/profile.jpg')}
            style={{width: 44, height: 44, borderRadius: 14, top: 3}}
          />
        </TouchableOpacity>
      </View>

      {/* Tag Input & SearchBar*/}
      <TextInput placeholder="Search coffe" style={styles.searchBar} />
      {/* Baner */}
      <View style={styles.PromoBaner}>
        <Image
          source={require('../img/barista.jpg')}
          style={styles.PromoImage}
        />
        <View style={styles.PromoBadge}>
          <Text style={styles.PromoText}> Promo </Text>
        </View>
        <Text style={styles.PromoBuy}> Buy one get</Text>
        <Text style={styles.PromoBuyy}>one FREE</Text>
      </View>

      {/* Scrollview Horizontal */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.Scroll}>
          <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.Font}>Cappuccino</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.Font}>Machiato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.Font}>Latte</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.Font}>Americano</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} activeOpacity={0.7}>
            <Text style={styles.Font}>Esperesso</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ScrollView for Products */}
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.row}>
          {/* Produk 1 */}
          <View style={styles.card}>
            <View style={styles.imageContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('Detail')}> 
              <Image
                source={require('../img/caffeine-coffee-cream-black-cup.jpg')}
                style={styles.productImage}
              />
              </TouchableOpacity>
              <View style={styles.ratingContainer}>
                <Image
                  source={require('../img/Star.png')}
                  style={styles.starImage}
                />
                <Text style={styles.ratingText}>4.8</Text>
                
              </View>
            </View>

            {/* Merk Kopi mas */}
            <Text style={styles.productName}>Cappuccino</Text>
            <Text style={styles.productDescription}>with Chocolate</Text>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.productPrice}>$4.53</Text>

              {/* Plus Button */}

              <TouchableOpacity style={styles.plusButton}>
                <Text style={styles.plusText}> + </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Produk 2 */}
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../img/cofe.jpeg')}
                style={styles.productImage}
              />
              <View style={styles.ratingContainer}>
                <Image
                  source={require('../img/Star.png')}
                  style={styles.starImage}
                />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
            </View>
            {/* Merk Kopi mas */}
            <Text style={styles.productName}>Cappuccino</Text>
            <Text style={styles.productDescription}>with Oat Milk</Text>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.productPrice}>$3.90</Text>
              {/* Batas */}

              {/* Plus Button */}
              <TouchableOpacity style={styles.plusButton}>
                <Text style={styles.plusText}> + </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          {/* Produk 3 */}
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../img/brown-coffee.jpg')}
                style={styles.productImage}
              />
              <View style={styles.ratingContainer}>
                <Image
                  source={require('../img/Star.png')}
                  style={styles.starImage}
                />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
            </View>

            {/* merk kopi */}
            <Text style={styles.productName}>Cappuccino</Text>
            <Text style={styles.productDescription}>Classic</Text>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.productPrice}>$4.00</Text>
              {/* Batas */}

              {/* Plus Button */}
              <TouchableOpacity style={styles.plusButton}>
                <Text style={styles.plusText}> + </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Produk 4 */}
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../img/barista.jpg')}
                style={styles.productImage}
              />
              <View style={styles.ratingContainer}>
                <Image
                  source={require('../img/Star.png')}
                  style={styles.starImage}
                />
                <Text style={styles.ratingText}>4.9</Text>
              </View>
            </View>

            {/* Merk Kopi */}
            <Text style={styles.productName}>Cappuccino</Text>
            <Text style={styles.productDescription}>with Extra Foam</Text>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.productPrice}>$3.70</Text>
              {/* Batas */}

              {/* Plus Button */}
              <TouchableOpacity style={styles.plusButton}>
                <Text style={styles.plusText}> + </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Batas Button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },

  flexColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 2,
  },

  text: {
    color: '#B7B7B7',
    fontFamily: 'Sora-Reguler',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15.12,
    marginBottom: 5,
    top: 10,
    left: 5,
  },

  location: {
    width: 143,
    height: 18,
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17.64,
    color: '#DDDDDD',
    top: 9,
    left: 5,
  },

  searchBar: {
    color: '#646464',
    backgroundColor: '#FFFAFA',
    fontFamily: 'Sora-Reguler',
    fontWeight: '400',
    top: 15,
    fontSize: 14,
    borderRadius: 16,
    lineHeight: 17.64,
    height: 50,
    padding: 8,
    marginVertical: 20,
    marginTop: 2,
  },

  PromoBaner: {
    position: 'relative',
    marginBottom: 20,
  },

  PromoImage: {
    width: '100%',
    height: 175,
    resizeMode: 'stretch',
    borderRadius: 16,
    top: 15,
    overflow: 'hidden',
    marginBottom: 5,
  },

  PromoBadge: {
    position: 'absolute',
    top: '25%',
    left: 23,
    backgroundColor: '#ED5151',
    padding: 5,
    borderRadius: 8,
    gap: 1,
  },

  PromoText: {
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 17.64,
    color: 'white',
  },

  PromoBuy: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 48,
    color: 'white',
    position: 'absolute',
    top: 60,
    left: 10,
    fontWeight: '600',
    padding: 5,
  },

  PromoBuyy: {
    fontFamily: 'Sora-SemiBold',
    color: 'white',
    fontSize: 48,
    position: 'absolute',
    top: 100,
    left: 19,
    fontWeight: '600',
    padding: 5,
  },

  Scroll: {
    flexDirection: 'row',
    marginTop: 10,
  },

  Button: {
    backgroundColor: 'white',
    fontFamily: 'Sora-Reguler',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginRight: 8,
    height: 38,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Font: {
    fontFamily: 'Sora-SemiBold',
    fontWeight: '400',
    fontSize: 15,
    color: '#2F4B4E',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  card: {
    backgroundColor: '#ffff',
    borderRadius: 17,
    padding: 10,
    width: 170,
    height: 239,
  },

  productImage: {
    position: 'relative',
    width: '100%',
    height: 120,
    marginBottom: 10,
    borderRadius: 10,
  },

  productName: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    color: '#2F2D2C',
  },

  productDescription: {
    fontFamily: 'Sora-SemiBold',
    fontWeight: '400',
    fontSize: 12,
    color: '#9B9B9B',
    marginVertical: 5,
    marginBottom: 15,
  },

  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  productPrice: {
    fontFamily: 'Sora-SemiBold',
    fontSize: 18,
    fontWeight: '600',
    color: '#2F4B4E',
  },

  imageContainer: {
    position: 'relative',
  },

  ratingContainer: {
    position: 'absolute',
    color: '#ffff',
    top: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 8,
    padding: 5,
  },

  starImage: {
    width: 16,
    height: 16,
  },

  ratingText: {
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',
    fontSize: 10,
    color: '#ffff',
    marginLeft: 5,
  },

  plusButton: {
    backgroundColor: '#C67C4E',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },

  plusText: {
    fontSize: 16,
    fontFamily: 'Sora-SemiBold',
    color: 'white',
  },
});

export default HomeScreen;
