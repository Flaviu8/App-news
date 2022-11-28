const Title = ({ title, url }) => {
  return (
    <div>
      <p>{title}</p>
      <a href={url}></a>
    </div>
  );
};

export default Title;
