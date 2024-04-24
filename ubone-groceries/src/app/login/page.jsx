export default function Login() {
  return (
    <main>
      <section className="container login">
        <p className="section-h">Login To Account</p>
        <p>Enter account details below</p>
        <div className="col-l">
          <div className="col-s">
            <label htmlFor="Email">Email Address</label>
            <input type="text" className="lightborder radius" />
          </div>
          <div className="col-s">
            <label htmlFor="Password">Password</label>
            <input type="password" />
          </div>
        </div>
        <button className="secondary-btn">Sign In</button>
        <div className="create-account">
          <p>Dont have an account?</p>
          <a href="/signup">Create Account</a>
        </div>
      </section>
    </main>
  );
}
