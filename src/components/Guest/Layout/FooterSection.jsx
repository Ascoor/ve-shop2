  const FooterSection = () => {
    return (
        
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-xl font-bold">Category</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Useful Links</h4>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Contact Us</h4>
            <p><a href="tel:+011234567890">+01 1234567890</a></p>
            <p><a href="tel:+019876543210">+01 9876543210</a></p>
            <p><a href="mailto:demo@gmail.com">demo@gmail.com</a></p>
            <div className="flex space-x-4 mt-4">
              <a href="#"><img src="images/fb-icon.png" alt="Facebook" /></a>
              <a href="#"><img src="images/twitter-icon.png" alt="Twitter" /></a>
              <a href="#"><img src="images/linkedin-icon.png" alt="LinkedIn" /></a>
              <a href="#"><img src="images/instagram-icon.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>Copyright 2020 All Right Reserved <a href="https://html.design" className="text-blue-500">Free Html Templates</a></p>
        </div>
      </footer>

    );

}

export default FooterSection

      