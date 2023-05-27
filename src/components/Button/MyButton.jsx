import React from 'react'
import './MyBtnStyles.scss'
const BUTTON_TYPE_CLASSES = {
  'google': 'google-sign-in',
  'inverted': 'inverted',
}
export default function MyButton({ children, buttonType, ...otherProps }) {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
}
