import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import globalStyles from '../../../assets/styles/globals';
import Header from '../../../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import style from '../style';
import {updateSelectedCategoryId} from '../../../redux/reducers/Categories';
import SearchInput from '../../../components/SearchInput';
import Tab from '../../../components/Tab';
import {CategoryItem} from '../../../models/category';
import DonationsList from '../components/DonationsList';

function Home({navigation}): React.JSX.Element {
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.categories);
  const donations = useSelector((state: RootState) => state.donations);
  const dispatch = useDispatch();
  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  const limit = 4;

  const pagination = (items: CategoryItem[], page: number, limit: number) => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setCategoryList(pagination(categories.categories, categoryPage, limit));
    setCategoryPage(categoryPage + 1);
  }, []);

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.homeWrapper}>
          <View style={style.headerContainer}>
            <View>
              <Text style={style.smallDashboardText}>Hello,</Text>
              <Header
                size={24}
                text={`${user.firstName} ${user.lastName.substring(0, 1)}. 👋`}
              />
            </View>
            <Image
              style={style.profileImage}
              resizeMode="contain"
              source={{uri: user.profileImage}}
            />
          </View>
          <View style={style.searchBarWrapper}>
            <SearchInput onSearch={() => {}} />
          </View>

          <TouchableOpacity>
            <Image
              style={style.bannerImage}
              resizeMode="contain"
              source={require('./../../../assets/highlighted_image.png')}
            />
          </TouchableOpacity>
          <View style={{marginTop: 20}}>
            <Header size={18} text="Select Category" />

            <FlatList
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                const newData = pagination(
                  categories.categories,
                  categoryPage,
                  limit,
                );
                if (newData.length > 0) {
                  setCategoryList([...categoryList, ...newData]);
                  setCategoryPage(categoryPage + 1);
                }
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categoryList}
              renderItem={({item}) => (
                <Tab
                  disabled={item.categoryId !== categories.selectedCategoryId}
                  key={item.categoryId}
                  text={item.name}
                  onPress={() => {
                    dispatch(updateSelectedCategoryId(item.categoryId));
                  }}
                />
              )}
            />
          </View>

          <DonationsList navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

{
  /* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{minWidth: 180}}>
          <Tab text="Highlight " onPress={() => {}} />
        </View>
        <View style={{minWidth: 180}}>
          <Tab text="2" disabled onPress={() => {}} />
        </View>
        <View style={{minWidth: 180}}>
          <Tab text="3" disabled onPress={() => {}} />
        </View>
        <View style={{minWidth: 180}}>
          <Tab text="4" disabled onPress={() => {}} />
        </View>
      </ScrollView> */
}
