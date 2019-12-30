import Header from './header/header';
import Head from 'next/head';
import Home from './home';
import Footer from './footer/footer';
const Index = () => (

    <div>
        <Head>
            <meta property="og:type" content="technology-blog" />
            <meta property="og:title" content="Code Fun" />
            <meta property="og:description" content="Write Code And Change The World" />
            <meta property="og:image"
                content="https://firebasestorage.googleapis.com/v0/b/huytran-3e2fe.appspot.com/o/Screen%20Shot%202019-12-26%20at%205.56.08%20PM.png?alt=media&token=c87e7894-4a24-4d08-939c-187717e13937" />
            <title>Code Fun</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
        </Head>
        <Header />
        <Home />
        <Footer />
    </div>
);

export default Index;