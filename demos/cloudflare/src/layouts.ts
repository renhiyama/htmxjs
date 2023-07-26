import { LayoutFunction, html } from 'htmxjs';

export const RootLayout: LayoutFunction = ({ children }) => html`
	<html>
		<head>
			<meta charset="UTF-8" />
			<title>Cloudflare Demo</title>
			<script src="/js/htmx.min.js"></script>
		</head>
		<body hx-boost="true">
			${children}
		</body>
	</html>
`;

export const BobLayout: LayoutFunction = ({ children }) => html`
	<h1>Cloudflare Demo</h1>
	<a href="/">Go Home</a>
	${children}
`;
