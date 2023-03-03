import { useEffect, useState } from 'react';
import Link from '../src/components/Link';

export default function FAQPage() {
    const [FAQ, setFAQ] = useState([]);
    useEffect(() => {
        const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json ';
        fetch(FAQ_API_URL)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setTimeout(() => {
                setFAQ(data);
            }, 3 * 1000);
          })
    })
    return (
        <div>
            <h1>Alura Cases - Página de Pesguntas FAQ</h1>
            <Link href="/">
              Ir para Home
            </Link>

            <ul>
                {FAQ.map(({answer, question}, index) => (
                    <li key={index}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}