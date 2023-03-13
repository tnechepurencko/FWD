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
        let data : DateInterface = await res.json();
        return data;
    }

    let promise = getJoke();
</script>

{#await promise}
    <p>...waiting</p>
{:then number}
    <h1>JOKE</h1>
    <h2>{number.title}</h2>
    <img src={number.img} alt={number.alt}>
    <p>{number.alt}</p>
    <p>{new Date(number.year, number.month - 1, number.day).toLocaleDateString()}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}