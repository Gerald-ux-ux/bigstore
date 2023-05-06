import { useState, useEffect } from "react";

function Landing() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    }

    fetchData();
  }, []);
  return (
    <div className="flex flex-col w-10/12 ">
      <div className=" hidden lg:flex border-b-2 flex-col">
        <img src="/images/div.png" />
      </div>

      <div className="mt-3  relative ">
        <h3 className="text-[#EF363A] font-bold border-b-2 text-2xl">
          Our Top Categories
        </h3>
        <div className="absolute bottom-0 left-0 w-3/12 h-0.5 bg-[#EF363A]"></div>
      </div>
{/* Mapped data */}
      <div className="flex bg-[#F5F5F5] mt-6 ">
        <div className="flex">
          {categories.map(({ node }) => (
            <div className="flex ">
      
              <ul> {node.slug}</ul>
              <div>
                <img src={node.backgroundImage} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex ">
        <div className="bg-[#F5F5F5] justify-center items-center  w-1/12  flex flex-row rounded-full">
          <img src="/images/phone.png" alt="" />
        </div>
        <div className="bg-[#F5F5F5] p-4  flex flex-row rounded-full">
          <img src="/images/phone.png" alt="" />
        </div>
        <div className="bg-[#F5F5F5] p-4  flex flex-row rounded-full">
          <img src="/images/phone.png" alt="" />
        </div>
        <div className="bg-[#F5F5F5] p-4  flex flex-row rounded-full">
          <img src="/images/phone.png" alt="" />
        </div>
        <div className="bg-[#F5F5F5] p-4  flex flex-row rounded-full">
          <img src="/images/phone.png" alt="" />
        </div>
        <div className="bg-[#F5F5F5] p-4  flex flex-row rounded-full">
          <img src="/images/phone.png" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default Landing;
