function Header() {
  return (
    <header className="app-header">
      <img src={`${process.env.PUBLIC_URL}/img/js.png`} alt="img" />
      <h1>The JS Quiz</h1>
    </header>
  );
}

export default Header;
