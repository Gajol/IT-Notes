function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
let labels = [];

repeat(5, j => { labels.push(`Unit ${j + 1}`); });

console.log (labels)