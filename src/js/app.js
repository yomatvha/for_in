export default function orderByProps(obj, [...keys]) {
  const withProps = [];
  const withoutProps = [];

  keys.forEach((key) => {
    if (key in obj) {
      withProps.push({ key, value: obj[key] });
    }
  });

  for (const key in obj) {
    if (!keys.includes(key)) {
      withoutProps.push({ key, value: obj[key] });
    }
  }

  withoutProps.sort((a, b) => (a.key > b.key ? 1 : -1));

  const result = withProps.concat(withoutProps);

  return result;
}
