export const yandexCloudImage = (imageUrl) => {
  const filename = imageUrl.split('/').pop();
  return `${process.env.NEXT_PUBLIC_R2_PUBLIC_URL}/${filename}`;
};
