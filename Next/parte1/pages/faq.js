import FAQScreen from "../src/screens/FAQScreen";

export default FAQScreen

// Utilizado para fazer sites estáticos. Roda somente em build time. Sempre vai ter a resposta mais rápida pro usuário.
export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json ';
    const faq = await fetch(FAQ_API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });

    return {
      props: {
        // Qualquer coisa passada aqui, será passada como props no componente de baixo
        faq
      },
    }
}

// Roda a cada acesso que você recebe. Caso precise de coisas dinâmicas.
// export async function getServerSideProps() {
//     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json ';
//     const faq = await fetch(FAQ_API_URL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         return data;
//       });

//     return {
//       props: {
//         // Qualquer coisa passada aqui, será passada como props no componente de baixo
//         faq
//       },
//     }
// }

// export default function FAQPage({faq}) {
//     return (
//         <div>
//             <PageTitle>
//                 FAQ - Alura Cases Campanha
//             </PageTitle>
//             <h1>Alura Cases - Página de Pesguntas FAQ</h1>
//             <Link href="/">
//               Ir para Home
//             </Link>

//             <ul>
//                 {faq.map(({answer, question}, index) => (
//                     <li key={index}>
//                         <article>
//                             <h2>{question}</h2>
//                             <p>{answer}</p>
//                         </article>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }