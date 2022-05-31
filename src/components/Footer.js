const Footer = (props) => {
  return (
    <div className='cart'>
      <div className='price'>
        <h2>Total Price</h2>
        <span>
          Rs: <b>{props.getTotalPrice()}</b>
        </span>
      </div>
    </div>
  );
};

export default Footer;
