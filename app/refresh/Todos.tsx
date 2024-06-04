export default async function Todos() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: 'no-store'
  }).then(response => response.json())
    .then(data => {
      // Randomly shuffle the data array
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }
      return data;
    });

  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Todos Data Fetched")
  return (
    <div className="max-h-52 overflow-auto">
      {
        data.map((item: any) => (
          <p key={item.id}>{item.title}</p>
        ))
      }
    </div>
  );
}