
<head>
	<meta charset="UTF-8">
	<title>Homework5</title>
</head>

<main>
	<header>
		<h1>Tatiana Nechepurenko</h1>
	</header>

	<h2>B20-SD-01</h2>
	<picture class="hello-world">
		<img src="https://www.technotification.com/wp-content/uploads/2016/07/hello-world-2.jpg" alt="hello world picture">
	</picture>
</main>

<style>
	:root {
		font-family: Arial, sans-serif;
	}

	body {
		min-height: 100vh;
		background-image: linear-gradient(lightcyan 0%, lightblue 80%, lightcyan 95%);
	}

	a {
		color: orangered;
		text-decoration: none;
		font-size: 110%;
	}

	h1, h2 {
		text-align: center;
		font-weight: 400;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	p {
		font-size: 150%;
	}

	.hello-world {
		display: block;
		position: relative;
		width: 90%;
		height: 0;
		padding: 0 0 calc(100% / 2) 0;
	}

	.hello-world img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
