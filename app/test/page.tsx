export default async function Page() {
  const result = await fetch('http://localhost:3000/api/test')
  const data = await result.json()

  return <div>{data.data}</div>
}
