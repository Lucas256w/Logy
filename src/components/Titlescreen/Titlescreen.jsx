import styles from "./Titlescreen.module.css";

const Titlescreen = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <p className={styles.titleNormal}>
          <span className={styles.titleBold}>Hey, this is Logy.</span> See my
          thoughts, stories and ideas
        </p>
      </div>
    </>
  );
};

export default Titlescreen;
