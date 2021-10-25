import { useRoute } from '@react-navigation/native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Typography, Button, Background } from '@components';

// Colors
import color from '@themes/colors';

// Actions
import { deletePostRequest } from '@store/ducks/post/actions';
import { RootState } from '@store/ducks/rootReducer';

// Utils
import { proportion } from '@utils/proportion';

import { Container, HeaderButton, RowWrapper } from './postDetails.styles';

const PostDetails = ({ navigation }) => {
  const { params } = useRoute();
  const post = params?.post;

  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={28} color={color.primaryColor} />
        </HeaderButton>
      ),
      headerRight: () => (
        <HeaderButton
          onPress={() => {
            navigation.navigate('UpdatePostScreen', { post });
          }}
        >
          <AntDesign name='edit' size={26} color={color.primaryColor} />
        </HeaderButton>
      ),
      headerTitle: () => (
        <Typography variant='H5HeadlineQuicksand'>Post Details</Typography>
      ),
    });
  }, [navigation]);

  const { loading } = useSelector((state: RootState) => state.post);

  const handleSubmit = () => {
    dispatch(deletePostRequest(post.id));
  };

  return (
    <Background>
      <Container>
        <Typography variant='H5HeadlineQuicksand'>{post.title}</Typography>

        <Typography style={{ marginTop: proportion(2) }} variant='S1Paragraph'>
          {post.content}
        </Typography>

        <RowWrapper>
          <Typography
            style={{ marginTop: proportion(2), marginRight: 6 }}
            variant='S1Paragraph'
          >
            Auth:
          </Typography>
          <Typography
            color='secondaryColor'
            style={{ marginTop: proportion(2) }}
            variant='S1Paragraph'
          >
            {post.username}
          </Typography>
        </RowWrapper>

        <Button
          title='Delete'
          style={{
            position: 'absolute',
            backgroundColor: color.danger,
            marginTop: proportion(76),
            alignSelf: 'center',
          }}
          onPress={() => handleSubmit()}
          loading={loading}
        />
      </Container>
    </Background>
  );
};

export default PostDetails;
