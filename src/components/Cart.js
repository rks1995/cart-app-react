import CartItem from './CartItem';

const Cart = (props) => {
  const { products } = props;
  return (
    <div className='cart'>
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={props.HandleIncreaseQuantity}
            onDecreaseQuantity={props.HandleDecreaseQuantity}
            onDelete={props.HandleDelete}
          />
        );
      })}
    </div>
  );
};

export default Cart;
