import styles from './styles.module.scss';

const Tag = ({ color, w = "40px", h = "18px" }) => {
	const dimensions = {
		width: w,
		height: h,
        backgroundColor: color
	};
	return (
		<div style={dimensions} className={styles["tag"]}></div>
	)
}

export default Tag