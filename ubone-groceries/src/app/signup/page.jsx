export default function Signup() {
  return (
    <main>
      <section className="container signup">
        <p className="section-h">Create account</p>
        <p>Please register account detail</p>
        <div className="col-l">
          <div className="col-s">
            <label htmlFor="First Name">First name</label>
            <input type="text" placeholder="First name" />
          </div>

          <div className="col-s">
            <label htmlFor="Last name">Last Name</label>
            <input type="text" placeholder="Last name" />
          </div>
          <div className="col-s">
            <label htmlFor="Email">Email Address</label>
            <input type="text" placeholder="Email" />
          </div>
          <div className="col-s">
            <label htmlFor="Password">Password</label>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="terms-grid">
          <input type="checkbox" className="fit" />
          <p className="terms">
            I have read and agree with the <span>terms & conditions</span>
          </p>
        </div>
        <button className="disabled-btn">Create Account</button>
        <div className="create-account">
          <p>Already have an account?</p>
          <a href="/signup">Log In</a>
        </div>
      </section>
    </main>
  );
}
