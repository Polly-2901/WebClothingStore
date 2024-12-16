import styles from '../card/Card.module.css'

const CatalogCard = ({ title, img }) => {

	return (
		<div className={styles.card}>
			<a href="#!" className={styles.card__link}>
			</a>
			<img
				className={styles.card__img}
				src={img}
				alt="Category ..."
			/>


			<div className={styles.card__body}>
				<div className={styles.card__text}>
					<div className={styles.card__title}>
						{title}
					</div>
				</div>
			</div>
		</div>
	);
}
export default CatalogCard;