import sprite from '../../assets/sprite.svg';

const Svg = ({
  id,
  size,
  fill,
  stroke,
  strokeWidth,
  className = '',
  onClick,
  classNameSvg = '',
}) => {
  return (
    <div onClick={onClick} className={className}>
      <svg
        className={classNameSvg}
        width={size}
        height={size}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      >
        <use href={`${sprite}#${id}`} />
      </svg>
    </div>
  );
};

Svg.defaultProps = {
  size: 24,
};

export default Svg;
