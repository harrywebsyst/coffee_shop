import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import ProfileList from '../components/ProfileList';
import CustomIcon from '../components/CustomIcon';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PaymentList = [
  {
    name: 'Update Profile',
    icon: 'person-outline',
    //   icon: require('../assets/app_images/gpay.png'),
  },
  // {
  //   name: 'Payment Methods',
  //   icon: require('../assets/app_images/amazonpay.png'),
  // //   isIcon: false,
  // },
  {
    name: 'Help & Support',
    icon: 'help-circle-outline',
    //   isIcon: false,
  },
  {
    name: 'History',
    //   icon: require('../assets/app_images/amazonpay.png'),
    icon: 'help-buoy-outline',
    //   isIcon: false,
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SPACING.space_12,
        backgroundColor: COLORS.primaryBlackHex,
      }}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: SPACING.space_30 * 3.6,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IonIcon name="arrow-back-outline" color={COLORS.primaryWhiteHex} size={25} />
        </TouchableOpacity>
        <Text
          style={{
            marginVertical: SPACING.space_12,
            textAlign: 'center',
            color: COLORS.primaryWhiteHex,
            fontSize: 20,
            fontFamily: FONTFAMILY.poppins_bold,
          }}>
          Profile Screen
        </Text>
      </View>
      <View
        style={{
          padding: SPACING.space_12,
          backgroundColor: COLORS.secondaryGreyHex,
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'row',
          gap: SPACING.space_12,
        }}>
        <Image
          source={require('../assets/app_images/avatar.png')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            objectFit: 'cover',
          }}
        />
        <View>
          <Text
            style={{
              fontSize: FONTSIZE.size_18,
              fontWeight: '400',
              color: COLORS.primaryWhiteHex,
              fontFamily: FONTFAMILY.poppins_semibold,
            }}>
            Demo
          </Text>
          
          <Text
            style={{
              color: COLORS.primaryWhiteHex,
              fontFamily: FONTFAMILY.poppins_medium,
            }}>
            demo@gmail.com
          </Text>
          <Text
            style={{
              color: COLORS.primaryWhiteHex,
              fontFamily: FONTFAMILY.poppins_medium,
            }}>
            000-0000-000
          </Text>
        </View>
      </View>

     <View style={{flex:1 , justifyContent:'space-between', flexDirection:'column'}}>
     <View style={{marginTop: SPACING.space_10}}>
        {PaymentList.map((data: any) => (
          <TouchableOpacity
            style={{marginTop: SPACING.space_10}}
            key={data.name}>
            <ProfileList
              name={data.name}
              icon={data.icon}
              isIcon={data.isIcon}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View>
      <TouchableOpacity
            style={{marginTop: SPACING.space_10, }} >
            <ProfileList
              name={'Logout'}
              icon={'log-out-outline'} 
              containerStyle={{backgroundColor:COLORS.primaryRedHex}}
            />
          </TouchableOpacity>
      </View>
     </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
