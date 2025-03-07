import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          src="/landsat-8-sm-1582894936147.jpg"
          alt="Landsat imagery"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>
        Landsat Reflectance Data: On the Fly and at Your Fingertips
      </h1>
    </header>
  );
};

export default Header;