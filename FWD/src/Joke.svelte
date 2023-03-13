<script lang="ts">
    getJoke()

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

        const jokeImage = document.getElementById('jokeImage') as HTMLImageElement;
        const jokeTitle = document.getElementById('jokeTitle') as HTMLHeadingElement;
        const jokeDate = document.getElementById('jokeDate') as HTMLParagraphElement;
        const jokeText = document.getElementById('jokeText') as HTMLParagraphElement;

        jokeImage.src = data.img;
        jokeImage.alt = data.alt;
        jokeTitle.innerText = data.title;
        jokeDate.innerText = new Date(data.year, data.month - 1, data.day).toLocaleDateString();
        jokeText.innerText = data.alt;
    }
</script>

<h1>JOKE</h1>
<h2 id="jokeTitle"></h2>
<img id="jokeImage">
<p id="jokeText"></p>
<p id="jokeDate"></p>