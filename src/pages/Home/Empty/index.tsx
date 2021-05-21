import React from 'react';

import Header from '../../../components/Header';

interface IEmptyPage {
  title: string;
}
const EmptyPage = ({ title }: IEmptyPage) => {
  return (
    <>
      <Header />
      <div>This is the empty page of {title}</div>
    </>
  );
};
export default EmptyPage;
