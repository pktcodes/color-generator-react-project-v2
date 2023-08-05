const SingleColor = ({ color, index }) => {
  const { weight, hex, type } = color;

  return (
    <article
      className={type === 'shade' ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
