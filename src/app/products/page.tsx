'use client'
 
import { useSearchParams } from 'next/navigation'
 
export default function SortProducts() {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())
 
  function updateSorting(sortOrder: string) {
    params.set('sort', sortOrder)
    window.history.pushState(null, '', `?${params.toString()}`)

    console.log(window.history);
  }
 
  return (
    <>
      {params.get('sort') === 'asc' ? <p>Sorted ascending</p> : <p>Sorted descending</p>}
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
    </>
  )
}