const toCapitalizeFirstLetter = (stringComponent: string) => {
  // if (typeof stringComponent !== 'string') return ''
  return stringComponent.charAt(0).toUpperCase() + stringComponent.slice(1);
};
export default toCapitalizeFirstLetter;
