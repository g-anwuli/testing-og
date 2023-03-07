import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home Page",
      metaTags: [
        {
          name: "description",
          content: "The home of testing og",
        },
        {
          property: "og:description",
          content: "The home page testing og",
        },
        {
          property: "og:title",
          content: "Home Page",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://testing-og-2.netlify.app",
        },
      ],
    },
  },
  {
    path: "/about/:id/:title",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: "About Page",
      metaTags: [
        {
          name: "description",
          content: "The About of testing og page, seeing if it working",
        },
        {
          property: "og:description",
          content: "The About of testing og page, seeing if it working",
        },
        {
          property: "og:title",
          content: "About Page",
        },
        {
          property: "og:type",
          content: "website",
        },
        // {
        //   property: "og:image",
        //   content: "",
        // },
        {
          property: "og:url",
          content: "https://testing-og-2.netlify.app",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const { id, title } = to.params;
//   const nearestWithTitle = to.matched
//     .slice()
//     .reverse()
//     .find((r) => r.meta && r.meta.title);

//   const nearestWithMeta = to.matched
//     .slice()
//     .reverse()
//     .find((r) => r.meta && r.meta.metaTags);

//   if (nearestWithTitle && !title) {
//     document.title = nearestWithTitle.meta.title;
//   } else if (title) {
//     document.title = to.params.title;
//   }

//   Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
//     (el) => el.parentNode.removeChild(el)
//   );

//   if (!nearestWithMeta) return next();

//   nearestWithMeta.meta.metaTags
//     .map((tagDef) => {
//       const tag = document.createElement("meta");

//       Object.keys(tagDef).forEach((key) => {
//         // if (key === "content" && tagDef.property === "og:title" && title) {
//         //   tag.setAttribute(key, title);
//         //   return;
//         // }
//         // if (
//         //   key === "content" &&
//         //   tagDef.property === "og:image" &&
//         //   nearestWithMeta.name === "about"
//         // ) {
//         //   tag.setAttribute(
//         //     key,
//         //     `https://robohash.org/${id}?set=set2&size=500x500`
//         //   );
//         //   return;
//         // }
//         tag.setAttribute(key, tagDef[key]);
//       });

//       tag.setAttribute("data-vue-router-controlled", "");
//       return tag;
//     })
//     .forEach((tag) => document.head.appendChild(tag));

//   next();
// });

export default router;
