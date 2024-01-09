export const transformProducts = (data) =>
  data.map((product) => {
    const { name, category, type, image, price, details, _id } = product;

    return {
      name,
      category,
      type,
      image,
      price,
      details,
      id: _id,
    };
  });
