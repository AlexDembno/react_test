import "./button.css";

function Button({ type, text }) {
  return (
    <button type={type} className="btn">
      {text}
    </button>
  );
}

export default Button;
