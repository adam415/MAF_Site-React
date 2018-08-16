import HomeArticle from './components/HomeArticle/HomeArticle';

export default [
    { header: "Welcome MAF",    nav: "Home",    link: "/",       requireExact: true,    component: HomeArticle },
    { header: "MAF Table",      nav: "Table",   link: "/table",  requireExact: true,    component: HomeArticle },
    { header: "MAF Form",       nav: "Form",    link: "/form",   requireExact: true,    component: HomeArticle },
    { header: "About MAF",      nav: "About",   link: "/about",  requireExact: true,    component: HomeArticle }
];