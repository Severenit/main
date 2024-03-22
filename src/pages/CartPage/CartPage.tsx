import React, { Suspense, lazy } from "react";

const RemoteCart = lazy(() => import("cart/Cart"));

export const CartPage = () => {
  return (
    <Suspense>
      <RemoteCart />
    </Suspense>
  );
};
