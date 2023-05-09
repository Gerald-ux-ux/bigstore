import React from "react";

function ShoppingCart({ cart, showCart }) {
  return (
    <>
      {showCart && (
        <>
          <div className="fixed inset-0 z-50 overflow-hidden ">
            <div className="">
              <div className="absolute inset-0 bg-black bg-opacity-25 transition-opacity">
                <section className="absolute inset-y-0 shadow-lg right-0   flex">
                  <div className="relative w-screen max-w-md">
                    <div className="bg-white h-full overflow-y-auto flex flex-col rounded-l-2xl ">
                      <div className="py-4 px-4 space-y-4 ">
                        <h3 className="font-bold text-2xl ">Your cart</h3>
                        {cart.length === 0 ? (
                          <div className="flex flex-col justify-center items-center space-y-8">
                            <button className="p-2 w-10/12 bg-[#F4F4F4]  rounded-full ">
                              <a
                                className="text-[#EF363A] text-sm "
                                href="/shoppingCart"
                              >
                                View cart
                              </a>
                            </button>
                            <button className=" p-2 w-10/12  bg-[#EF363A] rounded-full ">
                              <a className="text-[#F4F4F4] text-sm " href="/checkout">
                                Proceed to Checkout
                              </a>
                            </button>
                          </div>
                        ) : (
                          <ul>
                            {cart.map((item) => (
                              <li key={item.id}>
                                {item.name} - ${item.price}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
