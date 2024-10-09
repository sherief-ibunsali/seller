function Header() {
  return (
    <header className="app-header">
      <img src={`${process.env.PUBLIC_URL}/img/js.png`} alt="img" />
      <h1>THE JS QUIZ</h1>
    </header>
  );
}

export default Header;
