import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { Container, HeaderButton } from './updatePost.styles';

// Colors
import color from '@themes/colors';

// Components
import { Input, Button, Typography, Background } from '@components';

// Actions
import { updatePostRequest } from '@store/ducks/post/actions';
import { RootState } from '@store/ducks/rootReducer';

// Utils
import { proportion } from '@utils/proportion';
import { useEffect } from 'react';

interface FormData {
  id: string;
  title: string;
  content: string;
}

const NewPost = ({ navigation }) => {
  const { params } = useRoute();
  const post = params?.post;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderButton onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={28} color={color.primaryColor} />
        </HeaderButton>
      ),
      headerTitle: () => (
        <Typography variant='H5HeadlineQuicksand'>Post Update</Typography>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (post) {
      setFormData({
        id: post.id,
        title: post.title,
        content: post.content,
      });
    }
  }, []);

  const dispatch = useDispatch();

  const { loading } = useSelector((state: RootState) => state.post);

  const createNewPostSchema = yup.object().shape({
    title: yup.string().required('Campo obrigatório'),
    content: yup.string().required('Campo obrigatório'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(createNewPostSchema),
  });

  const setFormData = (data: FormData) => {
    setValue('id', data.id);
    setValue('title', data.title);
    setValue('content', data.content);
  };

  const onSubmit = ({ id, title, content }: FormData) => {
    dispatch(updatePostRequest({ id, title, content }));
  };

  return (
    <Background>
      <Container>
        <Controller
          name='title'
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              containerStyle={{ marginTop: proportion(2) }}
              label='Title'
              placeholder='Insert the title'
              returnKeyType='done'
              value={value}
              onChangeText={(text) => onChange(text)}
              error={errors?.title?.message}
            />
          )}
        />

        <Controller
          name='content'
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              containerStyle={{ marginTop: proportion(6) }}
              label='Content'
              multiline
              placeholder='Insert the content'
              returnKeyType='done'
              value={value}
              onChangeText={(text) => onChange(text)}
              error={errors?.title?.message}
            />
          )}
        />

        <Button
          title='Update'
          style={{ position: 'absolute', marginTop: proportion(76) }}
          onPress={handleSubmit(onSubmit)}
          loading={loading}
        />
      </Container>
    </Background>
  );
};

export default NewPost;
