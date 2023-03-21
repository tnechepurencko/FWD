<script lang="ts">
	import './styles.css';
    import { base } from '$app/paths';
</script>

<section>
    <p>Useful links:<a href="{base}/bio">Bio</a><a href="{base}/joke">Joke</a></p>
</section>

<slot></slot>

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

	.image {
		width: 30px;
		height: 30px;
	}
    .link {
        padding: 20px;
        margin: 100px;
    }
	footer{
		padding-left: 320px;
	}
    a {
        margin-left: 10px;
    }
	.contact-me {
		margin-top: 50px;
		display: flex;
		justify-content: center;
		padding: 12px;
	}
</style>

<p class="contact-me">Contact me</p>
<footer>
<a id="tg-link" class="link" href="https://t.me/pinkgoos"><img class="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="telegram picture"></a>
<a id="gh-link" class="link" href="https://github.com/tnechepurencko"><img class="image" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="githib picture"></a>
<a id="email" class="link" href="mailto:t.nechepurenko@innopolis.university"><img class="image" src="https://cdn-icons-png.flaticon.com/512/6244/6244438.png" alt="email picture"></a>
</footer>
