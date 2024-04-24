export default function Footer() {
  return (
    <footer className="footer">
        <div>
        <a href="/">
          <img src="logo.webp" alt="" className='logo' />
        </a>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          earum culpa veniam incidunt at.
        </p>
        <p>&#169; 2024 by Jordan Owens</p>
      </div>
      <div>
        <p className="footerheading">Account</p>
        <a href="/account">My Account</a>
        <a href="/cart">My Cart</a>
        <a href="/wishlist">Wishlist</a>
        <a href="/history">Order History</a>
        <a href="/policy">Return Policy</a>
      </div>
      <div>
        <p className="footerheading">Our Legal Team</p>
        <a href="/terms">Terms & Conditions</a>
        <a href="/about">About Us</a>
        <a href="/policy">Store Location</a>
      </div>
      <div>
        <p className="footerheading">Information</p>
        <a href="/cart">Our Story</a>
        <a href="/wishlist">Keep in touch</a>
        <a href="/history">Privacy policy</a>
        <a href="/policy">Refund Policy</a>
        <a href="/policy">FAQS</a>
      </div>
      <div>
        <p className="footerheading">Contact Us</p>
        <a href="/cart">@jordanowen1125@gmail.com</a>
        <a href="/wishlist">Houston, TX</a>
        <a href="/linkedin">LinkedIn</a>
        <a href="github.com">Github</a>
      </div>
    </footer>
  );
}
