import React from 'react';
import Button from '../ui/button';
import Input from '../ui/input';
import MainStyled from '../ui/main';

const Main = () => {
  return (
    <MainStyled>
      <Input />
      <Button> A button</Button>
    </MainStyled>
  );
};

Main.propTypes = {};

export default Main;
