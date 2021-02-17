export const importAll = (r) => {
  let images = {};
  // eslint-disable-next-line array-callback-return
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};
