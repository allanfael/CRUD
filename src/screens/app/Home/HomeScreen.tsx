import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, HeaderButton } from './home.styles';

//Redux
import { getPostRequest } from '@store/ducks/post/actions';
import { RootState } from '@store/ducks/rootReducer';

// Colors
import color from '@themes/colors';

// Components
import { Typography, Loading, Post } from '@components';
import { PostDTO } from '@dto/PostDTO';

const Home = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton onPress={() => navigation.navigate('NewPostScreen')}>
          <MaterialCommunityIcons
            name='plus'
            size={28}
            color={color.primaryColor}
          />
        </HeaderButton>
      ),
      headerTitle: () => (
        <Typography variant='H5HeadlineQuicksand'>CodeLeap</Typography>
      ),
    });
  }, [navigation]);

  const dispatch = useDispatch();
  const { loading, post } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(getPostRequest());
  }, []);

  const renderContent = () => (
    <Container<PostDTO>
      data={post}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Post
          id={item.id}
          title={item.title}
          username={item.username}
          content={item.content}
          createAt={item.createAt}
          style={{ marginBottom: 12 }}
          onPress={() =>
            navigation.navigate('PostDetailsScreen', { post: item })
          }
        />
      )}
    />
  );

  const renderLoad = () => <Loading style={{ marginTop: 20 }} />;

  return loading ? renderLoad() : renderContent();
};

export default Home;
