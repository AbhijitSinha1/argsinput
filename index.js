module.exports = process
    .argv
    .filter((z, i) => i > 1)
    .join(" ")
    .split('-')
    .map(z => z.trim())
    .filter(z => z != "")
    .reduce((a, b) => { a[b.split(" ")[0]] = b.split(" ")[1]; return a }, {});
