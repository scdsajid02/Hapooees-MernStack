import React from 'react'

const Footer = () => {
  return (
    <div>
        
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src="https://api.logo.com/api/v2/images?logo=lg_lb3ZotRQLdHlczI1Lx&format=webp&width=2000&background=transparent&fit=contain&quality=100&u=2024-11-21T20%3A23%3A52.888Z"
            alt=""
            className="w-24 mb-5"
          />
          <p className="w-full md:w-2/3 text-gray-600">
            At Hapooes, we specialize in premium fashion that combines style and
            comfort. Browse our collections and experience unmatched customer
            service. Stay trendy with Hapooes.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 9347324377</li>
            <li>sajidscd02@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; 2024 Hapooes - ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}

export default Footer