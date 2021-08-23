export default async function hitEvilInsult () {
    const res = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    return res
}