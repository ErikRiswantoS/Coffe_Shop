import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      {/* Image of the Item */}
      <Image
        source={require('../img/caffeine-coffee-cream-black-cup.jpg')}
        style={styles.productImage}
      />

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Cappuccino</Text>
        <Text style={styles.productSubTitle}>with Chocolate</Text>

        {/* Rating and Reviews */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>⭐ 4.8</Text>
          <Text style={styles.reviewText}>(230)</Text>
          <Image
                  source={require('../img/coffee-bean.png')}
                  style={styles.IconImage}
                />
          <Image
                  source={require('../img/Milk.png')}
                  style={styles.IconImage2}
                />

        </View>

        {/* Description */}
        <Text style={styles.description}>Description</Text>
        <Text style={{fontSize: 20, color: 'gray', marginBottom: 20, fontFamily:'Sora-SemiBold', fontWeight: '600', textAlign:'justify', left:5,}}>
          A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of
          espresso coffee and 85ml of fresh milk the fo..
          <Text style={styles.readMore}> Read More</Text>
        </Text>

        {/* Size Options */}
        <Text style={styles.sizeLabel}>Size</Text>
        <View style={styles.sizeContainer}>
          <TouchableOpacity style={styles.sizeButton}>
            <Text style={styles.sizeText}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.sizeButton, styles.selectedSize] }>
            <Text style={styles.sizeText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sizeButton}>
            <Text style={styles.sizeText}>L</Text>
          </TouchableOpacity>
        </View>

        {/* Price and Buy Button */}
        <View style={styles.priceContainer}>
        </View>
        <View style={styles.PriceButton}>
          <Text style={styles.price}>$4.53</Text>
          <Text style={styles.priceLabel}>Price</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },

  productImage: {
    width: 315,
    height: 226,
    borderRadius: 16,
    marginBottom: 20,
    left: 20,
  },

  productInfo: {
    paddingHorizontal: 10,
    
  },

  productName: {
    fontSize: 20,
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',

  },

  productSubTitle: {
    fontSize: 12,
    left:5,
    fontFamily: 'Sora-SemiBold',
    fontWeight: '400',
    color: '#9b9b9b',
    marginBottom: 5,
  },

  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left:5,
    marginTop:0,
    marginBottom: 15,
  },

  IconImage:{
    width: 44,
    height: 44,
    bottom:30,
    left:160
  },

  IconImage2:{
    width: 25,
    height: 30,
    bottom:25,
    left:170,
    
  },

  ratingText: {
    fontSize: 20,
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',
    marginRight: 5,
  },

  reviewText: {
    fontSize: 12,
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',
    color: '#9b9b9b',
  },

  description: {
    fontSize: 16,
    left:5,
    color: '#2f2d2c',
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',
    marginBottom: 10,
  },

  readMore: {
    color: '#C67C4E',
    fontWeight: 'bold',
  },

  sizeLabel: {
    fontSize: 16,
    left:5,
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',
    marginBottom: 10,
    color:'#2f2d2c'
  },

  sizeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sizeButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 40 ,
    marginRight: 8,
  },

  selectedSize: {
    backgroundColor: '#fff5ee',
  },

  sizeText: {
    fontSize:14,
    fontFamily: 'Sora-SemiBold',
    fontWeight: '600',
    color: '#2f2d2c',
  },

  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  
  PriceButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 10,
      paddingVertical: 8,
      marginRight: 8,
      
    },

    priceLabel: {
      fontSize: 14,
      right:50,
      color: '#9b9b9b',
      fontWeight: '600',
      fontFamily: 'Sora-SemiBold',
    },
    
  price: {
    fontSize: 18,
    fontWeight: '600',
    left:5,
    fontFamily: 'Sora-SemiBold',
    top:25
  },

  buyButton: {
    backgroundColor: '#C67C4E',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 85 ,
    
    
  },

  buyButtonText: {
    color: '#ffff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Sora-SemiBold',
  },
});

export default DetailScreen;
