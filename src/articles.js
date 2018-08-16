import HomeArticle  from './components/HomeArticle/HomeArticle';
import TableArticle from './components/TableArticle/TableArticle';
import FormArticle  from './components/FormArticle/FormArticle';
import AboutArticle from './components/AboutArticle/AboutArticle';

export default [
    { header: "Welcome MAF",    nav: "Home",    link: "/",       requireExact: true,    component: HomeArticle  },
    { header: "MAF Table",      nav: "Table",   link: "/table",  requireExact: true,    component: TableArticle },
    { header: "MAF Form",       nav: "Form",    link: "/form",   requireExact: true,    component: FormArticle  },
    { header: "About MAF",      nav: "About",   link: "/about",  requireExact: true,    component: AboutArticle }
];