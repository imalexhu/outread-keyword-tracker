import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Outread Keyword Generator</title>
        <meta name="description" content="A homepage created with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-black-50">
        <h1 className="text-6xl font-bold text-blue-600">
         Discover the exciting capabilities of keyword tracking with Outread
        </h1>
        <p className="mt-3 text-2xl text-gray-700">
          Get started by visiting{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            <a href="/dashboard"
            >
              /dashboard          
            </a>
            </code>
        </p>
        <div className="mt-6 flex flex-wrap justify-center">
          <a
            href="https://nextjs.org/docs"
            className="m-4 p-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>
          <a
            href="/dashboard"
            className="m-4 p-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Explore Keywords &rarr;</h3>
            <p className="mt-4 text-xl">
              Interact with our keyword tracking tool and see how it can help you.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p className="text-gray-600">Powered by Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
}
