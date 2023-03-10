import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {vh, vw} from '../../utils/dimensions';
import {Dimensions, StyleSheet, FlatList} from 'react-native';
const {width: screenWidth} = Dimensions.get('screen');
const width = screenWidth * 0.92 - vh(30);
const list = new Array(10).fill(undefined).map((val, index) => ({
  id: index,
}));
const SkelTon = () => {
  /**
   *
   * @keyExtractor Function
   * @returns uniqueness
   */
  const keyExtractor = (item: any) => item?.id?.toString();

  /**
   *
   * @renderItem function that returns a component
   * @returns uniqueness  component
   */
  const renderItem = ({item, index}: any) => {
    return (
      <SkeletonPlaceholder borderRadius={4}>
        <View style={styles.profileWrapper}>
          <View style={styles.mainShimmerContainerStyle} />
          <View style={styles.innerContainerShimmerStyle} />
          <View style={styles.innerContainerStyle}>
            <View style={styles.profileShimmerStyle} />
            <View style={styles.channelShimmerStyle} />
          </View>
        </View>
      </SkeletonPlaceholder>
    );
  };
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      style={styles.container}
      keyExtractor={keyExtractor}
    />
  );
};

export default React.memo(SkelTon);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: vw(20),
  },
  profileWrapper: {
    marginTop: vh(20),
  },
  profile: {
    marginHorizontal: vh(10),
  },
  postWrapper: {
    marginVertical: vh(10),
  },
  mainShimmerContainerStyle: {
    width: '100%',
    height: 200,
    borderRadius: vh(10),
    borderTopEndRadius: vh(10),
    borderTopLeftRadius: vh(10),
  },
  innerContainerShimmerStyle: {
    width: width * 0.9,
    height: vh(30),
    borderRadius: vh(5),
    marginTop: vh(5),
  },
  profileShimmerStyle: {
    width: vh(30),
    marginTop: vh(15),
    height: vh(30),
    borderRadius: vh(15),
  },
  channelShimmerStyle: {
    height: vh(25),
    width: width * 0.5,
    borderRadius: vh(5),
    marginTop: vh(15),
    marginLeft: vh(10),
  },
  innerContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
