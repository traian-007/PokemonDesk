import React from 'react';

interface IEmptyPage {
  title: string;
}
const EmptyPage = ({ title }: IEmptyPage) => {
  return (
    <>
      <div>This is the empty page of {title}</div>
    </>
  );
};
export default EmptyPage;
