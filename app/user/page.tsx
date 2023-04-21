export default async function Page() {
  const result = await fetch('http://localhost:3000/api/user')
  const data = await result.json()

  return <div>{data.name}</div>
}
