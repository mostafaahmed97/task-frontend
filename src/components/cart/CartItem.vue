<template>
  <div class="cart-item">
    <div class="item-img">
      <img :src="item.product.img" alt="" />
    </div>

    <div class="item-info">
      <div class="name">{{ item.product.name }}</div>
      <div class="description">{{ item.product.description }}</div>
    </div>

    <div class="item-price">${{ item.product.price }}</div>

    <div class="item-qty-ctrl">
      <input class="minus" value="-" type="button" />
      <input class="qty" type="text" :value="item.quantity" disabled size="1" />
      <input class="plus" value="+" type="button" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  data() {
    return {
      item: {
        id: 3,
        quantity: 1,
        createdAt: "2021-09-02T16:31:56.000Z",
        updatedAt: "2021-09-02T16:31:56.000Z",
        cartId: 1,
        productId: 3,
        product: {
          id: 3,
          name: "Audio Interface",
          description: "Record your greatest sounds",
          available_quantity: 5,
          img: "",
          price: 1950,
          createdAt: "2021-09-02T16:31:56.000Z",
          updatedAt: "2021-09-02T16:31:56.000Z",
        },
      },
    };
  },
};
</script>

<style></style>
