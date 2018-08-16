import HomeArticle  from './components/HomeArticle/HomeArticle';
import TableArticle from './components/TableArticle/TableArticle';
import FormArticle  from './components/FormArticle/FormArticle';
import AboutArticle from './components/AboutArticle/AboutArticle';

export default [
    /*        Заголовок страницы      NavBarItem          Компонент            Exact?       Путь     */
    { header: "Welcome MAF",     nav: "Home",  component: HomeArticle,  exact: true,  link: "/"      },
    { header: "MAF Table",       nav: "Table", component: TableArticle, exact: true,  link: "/table" },
    { header: "Submit MAF User", nav: "Form",  component: FormArticle,  exact: true,  link: "/form"  },
    { header: "About MAF",       nav: "About", component: AboutArticle, exact: true,  link: "/about" },
    
    /*        Заголовок страницы    No Item          Компонент           Exact?      Путь          Запросы   */
    { header: "Edit MAF User", nav: null, component: FormArticle, exact: true, link: "/form", req: "/:userId" }
];