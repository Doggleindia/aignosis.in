import React from 'react'

const BlogFooter = () => {
  return (
    <div>
      <footer className="bg-[#811F67] text-white py-10">
      <div className="container mx-auto max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center  grid grid-cols-1 md:grid-cols-4 gap-8 px-[1vw]">
       
        <div>
          <h3 className="text-lg font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 list-disc pl-[2vw]">
            <li>Home</li>
            <li>Shop</li>
            <li>Kids Clothing</li>
            <li>Gift</li>
            <li>Hospital Bags</li>
            <li>Crazy Christmas Deals</li>
            <li>New Arrivals</li>
            <li>Winter Sale</li>
            <li>Buy 1 Get 1</li>
            <li>About us</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 list-disc pl-[2vw]">
            <li>Brand Story</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 list-disc pl-[2vw]">
            <li>Our Team</li>
            <li>My Account</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>

       
        <div className='max-sm:flex max-sm:flex-col max-sm:items-center'>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic space-y-2 max-sm:text-center">
            <p>
              Plot No. 741, Mahavir Nagar-Ist, Mandir Marg, Tonk Road, Durgapura, Jaipur,
              Rajasthan 302018
            </p>
            <p>+91-9024788312 / +91-9983432333</p>
            <p>info@momshome.in</p>
          </address>
          <ul className="space-y-2 list-disc pl-[2vw]">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default BlogFooter
