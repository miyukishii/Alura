import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "@/views/Tarefas.vue";
import Projetos from "@/views/Projetos.vue";
import Formulario from '@/views/Projetos/Formulario.vue'
import Lista from '@/views/Lista.vue'

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: '/projetos',
    component: Projetos,
    children: [
      {
        path: "",
        name: "Projetos",
        component: Lista,
      },
      {
        path: "/novo",
        name: "Novo Projeto",
        component: Lista,
      },
      {
        path: "/:id",
        name: "Editar Projeto",
        component: Lista,
        props: true
      },
    ]
  }
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
