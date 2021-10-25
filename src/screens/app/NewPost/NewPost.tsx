import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './newPost.styles';

// Components
import { Input, Button, Typography, Background } from '@components';

// Actions
import { createPostRequest } from '@store/ducks/post/actions';
import { RootState } from '@store/ducks/rootReducer';

// Utils
import { proportion } from '@utils/proportion';

interface FormData {
  title: string;
  content: string;
}

const NewPost = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Typography variant='H5HeadlineQuicksand'>New Post</Typography>
      ),
    });
  }, [navigation]);

  const dispatch = useDispatch();

  const { loading } = useSelector((state: RootState) => state.post);

  const createNewPostSchema = yup.object().shape({
    title: yup
      .string()
      .required('Required field')
      .max(40, 'Max. 100 characters'),
    content: yup
      .string()
      .required('Required field')
      .max(40, 'Max. 500 characters'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(createNewPostSchema),
  });

  const onSubmit = ({ title, content }: FormData) => {
    dispatch(createPostRequest({ title, content }));
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
              error={errors?.content?.message}
            />
          )}
        />

        <Button
          title='Create'
          style={{ marginTop: proportion(56) }}
          onPress={handleSubmit(onSubmit)}
          loading={loading}
        />
      </Container>
    </Background>
  );
};

export default NewPost;
