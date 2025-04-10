import {StyleSheet, Image, View, Pressable} from 'react-native';
import React from 'react';
import {COLORS, SPACING} from '../theme/theme';
import { useNavigation } from '@react-navigation/native';

const ProfilePic = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.ImageContainer}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
      <Image
        style={styles.Image}
        source={require('../assets/app_images/avatar.png')}
      />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    height: SPACING.space_36,
    width: SPACING.space_36,
    borderRadius: SPACING.space_12,
    borderWidth: 2,
    borderColor: COLORS.secondaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  Image: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
});

export default ProfilePic;
