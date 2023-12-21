export function getImageUrl(person, size = 'b') {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}
