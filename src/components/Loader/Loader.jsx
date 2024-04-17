import loaderStyles from "./loaderStyles.module.scss";
const Loader = () => {
  return (
    <div className={loaderStyles.loading}>
      <div className={loaderStyles.dot}></div>
      <div className={loaderStyles.dot}></div>
      <div className={loaderStyles.dot}></div>
      <div className={loaderStyles.dot}></div>
      <div className={loaderStyles.dot}></div>
    </div>
  );
};

export default Loader;
