import "./Product.css"

function Product({ desc, image, original_price, sales }) {

  return (
    <div className='product --bg-light'>
      <img src={image} alt="" />
      <div className=" --center-all --p ">
        <p className='--color-dark --text-sm'>{desc}</p>
        <div className="--flex-between --width-100 --mt2 ">
          <p className={sales === 0 ? '--text-chocolate' : '--text-chocolate originalPrice--delete'}>$<span>{original_price}</span></p>
          <p className={sales === 0 ? '--text-chocolate sales--hide' : '--text-chocolate'}>$<span>{sales}</span></p>
          <button className='--btn --btn-chocolate'>Add to cart</button>
        </div>

      </div>

    </div>
  )
}

export default Product