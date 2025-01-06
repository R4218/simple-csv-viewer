import Head from "next/head";
import { useEffect, useState } from "react";
import CSVTable from "../components/CSVTable";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const resetUpload = () => {
    setUploadedFile(null);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between ${theme}`}>
      <Head>
        <title>CSV Viewer - Upload and View CSV Files Online</title>
        <meta
          name="description"
          content="Effortlessly upload, view, and manage CSV files with our online viewer. Powered by WebVives."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="WebVives" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="CSV Viewer, Upload CSV, Online CSV Viewer, WebVives"
        />
        <link rel="icon" href="/favicon.ico" />

        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YFXRCM9MBK"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YFXRCM9MBK');
        </script>
      </Head>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="p-4">
        <h1 className="text-4xl font-bold text-center">
          Welcome to CSV Viewer
        </h1>
        <p className="text-center mt-4">
          Effortlessly upload and view your CSV files!
        </p>

        {/* CSV Upload Section */}
        <section className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">Upload Your CSV File</h2>
          {!uploadedFile && (
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setUploadedFile(e.target.files[0])}
              className="mt-4 p-2 border rounded-md border-primary"
            />
          )}
        </section>

        {/* CSV Viewer */}
        {uploadedFile && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-center">CSV Data</h2>
            <CSVTable uploadedFile={uploadedFile} resetUpload={resetUpload} />
          </section>
        )}

        {/* CTA Section for WebVives */}
        <section className="mt-32 bg-primary p-6 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-accent">
            Build Your Dream Website with WebVives
          </h2>
          <p className="mt-4 text-lg text-black">
            We specialize in Shopify and WordPress development. ☎{" "}
            <a
              href="https://webvives.com"
              target="_blank"
              className="font-bold"
            >
              Contact us
            </a>{" "}
            today to bring your ideas to life!
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}