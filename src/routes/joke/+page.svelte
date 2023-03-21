<script lang="ts">
    interface DateInterface {
        img: string;
        title: string;
        alt: string;
        year: number;
        month: number;
        day: number;
    }

    async function getJoke() {
        const email: string = 't.nechepurenko@innopolis.university'
        let res = await fetch('https://fwd.innopolis.app/api/hw2?email=' + email);
        const id: string = await res.json();

        res = await fetch('https://getxkcd.vercel.app/api/comic?num=' + id);
        let jokeInsights : DateInterface = await res.json();
        return jokeInsights;
    }

    let promise = getJoke();
</script>

{#await promise}
    <p>...waiting</p>
{:then jokeInsights}
    <h2>JOKE</h2>
    <section>
        <h3>{jokeInsights.title}</h3>
        <img src={jokeInsights.img} alt={jokeInsights.alt}>
        <p>{jokeInsights.alt}</p>
        <p>{new Date(jokeInsights.year, jokeInsights.month - 1, jokeInsights.day).toLocaleDateString()}</p>
    </section>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}