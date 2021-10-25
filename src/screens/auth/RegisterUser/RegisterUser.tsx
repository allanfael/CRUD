import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import { Container, KeyboardAvoidingView } from './register.styles';

import { userRegister } from '@store/ducks/auth/action';

//Utils
import { proportion } from '@utils/proportion';

// Components
import { Background, Typography, Input, Button } from '@components';

interface FormData {
  username: string;
}

const RegisterUser = ({ navigation }) => {
  const dispatch = useDispatch();

  const userRegisterSchema = yup.object().shape({
    username: yup.string().required('Campo obrigatório'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(userRegisterSchema),
  });

  const onSubmit = ({ username }: FormData) => {
    dispatch(userRegister({ username }));

    navigation.navigate('HomeScreen');
  };

  return (
    <Background>
      <Container>
        <Typography variant='H5HeadlineMedium'>Olá, Seja Bem Vindo</Typography>

        <Controller
          name='username'
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              containerStyle={{ marginTop: proportion(6) }}
              label='Usuário'
              placeholder='Digite seu usuário'
              returnKeyType='done'
              value={value}
              onChangeText={(text) => onChange(text)}
              error={errors?.username?.message}
            />
          )}
        />

        <KeyboardAvoidingView>
          <Button
            title='Continuar'
            style={{ marginTop: proportion(60) }}
            onPress={handleSubmit(onSubmit)}
          />
        </KeyboardAvoidingView>
      </Container>
    </Background>
  );
};

export default RegisterUser;
