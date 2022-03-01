function* mygen() {
  for(const el of Array.from({length: 10}, (_, i) => Promise.resolve(i))) {
    yield el;
  }
}

for await(const pr of mygen()){
  const value = pr;
  console.log(value)
}
