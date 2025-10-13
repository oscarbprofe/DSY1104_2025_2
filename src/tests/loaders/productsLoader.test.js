import { productsLoader } from '../../loaders/products';

// Mock global fetch
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

test('productsLoader returns products with expected structure', async () => {
  const mockProduct = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 10.48,
    rating: 2.56,
    stock: 99,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "BEA-ESS-ESS-001",
    weight: 4,
    dimensions: {
      width: 15.14,
      height: 13.08,
      depth: 22.99
    },
    warrantyInformation: "1 week warranty",
    shippingInformation: "Ships in 3-5 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 3,
        comment: "Would not recommend!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Eleanor Collins",
        reviewerEmail: "eleanor.collins@x.dummyjson.com"
      }
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 48,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "5784719087687",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png"
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  };

  global.fetch.mockResolvedValue({
    json: async () => ({ products: [mockProduct] })
  });

  const products = await productsLoader();
  expect(products).toBeInstanceOf(Array);
  expect(products[0]).toMatchObject({
    id: expect.any(Number),
    title: expect.any(String),
    description: expect.any(String),
    category: expect.any(String),
    price: expect.any(Number),
    discountPercentage: expect.any(Number),
    rating: expect.any(Number),
    stock: expect.any(Number),
    tags: expect.any(Array),
    brand: expect.any(String),
    sku: expect.any(String),
    weight: expect.any(Number),
    dimensions: expect.any(Object),
    warrantyInformation: expect.any(String),
    shippingInformation: expect.any(String),
    availabilityStatus: expect.any(String),
    reviews: expect.any(Array),
    returnPolicy: expect.any(String),
    minimumOrderQuantity: expect.any(Number),
    meta: expect.any(Object),
    images: expect.any(Array),
    thumbnail: expect.any(String)
  });
});
