import "./header.css";

const titleEl = "Hello";

function Header() {
  return (
    <section>
      <h1 className="title">{titleEl}</h1>
    </section>
  );
}

export default Header;
