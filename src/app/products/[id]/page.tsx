import { revalidateTag } from "next/cache";

type Advice = {
    slip: {
        id: number;
        advice: string;
    }
}
export default async function Page({ params }: { params: { id: string } }) {
    const data = await fetchAdvice();
    return <div>
        <h2>Produto: {data.slip.id} - {data.slip.advice}</h2>
        <button onClick={() => revalidateTag('advice')}>Revalidate</button>
    </div>
}

const fetchAdvice = async (): Promise<Advice> => {
    const res = await fetch('https://api.adviceslip.com/advice', { next: { tags: ['advice'] }});
    const data = await res.json();

    return data;
}

const fetchProduct = async (id: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id);
        }, 2000);
    })
}

export async function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ]
}