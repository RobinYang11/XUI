import React, { createContext } from 'react';

const ctx: any = createContext();

interface IXUI {
	children: React.Children
}

function XUI(props: IXUI) {
	const { children } = props;
	return <ctx.Provider>{children}</ctx.Provider>
}


