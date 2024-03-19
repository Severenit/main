import React from "react";
import { Flex } from "antd";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "../../../../types";

interface ProductsListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps): JSX.Element => {
  return (
    <Flex
      gap={16}
      wrap="wrap"
      justify="center"
      style={{
        maxWidth: "932px",
        width: "100%",
      }}
    >
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </Flex>
  );
};
