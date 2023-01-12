import React from 'react';

interface IButtonProps {
	style: any
	children: any
}

export default function Button(props: IButtonProps) {
	const { children } = props;
	return <button>{children}</button>
}