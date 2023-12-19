import { createRouter, createWebHashHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const test = 'pub_list';
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import(`@/views/${test}.vue`)
  }
];

/**
 * @/views 아래에 있는 파일들을 자동 라우팅 잡아주는 코드 영역
 */
const views = require.context('@/views', true, /\.vue$/).keys(); // npm i @types/webpack-env @types/node -D 후 tsconfig.json의 compilerOptions에 "types": ["node", "webpack-env"] 명시

views.forEach(path => {
  if (!path.includes('pub_list.vue')) {
    const view = path.replace('./', '/').replace('.vue', '');

    routes.push({
      path: view,
      component: () => import(`@/views${view}.vue`)
    });
  }
});

// 라우터 생성
const router = createRouter({
  // 퍼블리싱 베이스 프로젝트는 빌드시 웹서버에 올릴 필요가 있을 수 있기 때문에 히스토리가 아닌 해쉬모드로 적용
  history: createWebHashHistory("/"),
  routes
});

export default router;
