import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} nome="Luiz Felipe" image="https://avatars.githubusercontent.com/u/89555249?s=400&u=733ada85d069642c6e7f2eb5c97133978eb216c5&v=4" />
          <UserInfo percentual={27} nome="Luiz Felipe" image="https://avatars.githubusercontent.com/u/89555249?s=400&u=733ada85d069642c6e7f2eb5c97133978eb216c5&v=4" />
          <UserInfo percentual={89} nome="Luiz Felipe" image="https://avatars.githubusercontent.com/u/89555249?s=400&u=733ada85d069642c6e7f2eb5c97133978eb216c5&v=4" />
          <UserInfo percentual={57} nome="Luiz Felipe" image="https://avatars.githubusercontent.com/u/89555249?s=400&u=733ada85d069642c6e7f2eb5c97133978eb216c5&v=4" />
          <UserInfo percentual={12} nome="Luiz Felipe" image="https://avatars.githubusercontent.com/u/89555249?s=400&u=733ada85d069642c6e7f2eb5c97133978eb216c5&v=4" />
        </Column>
      </Container>
    </>
  )
}

export { Feed };