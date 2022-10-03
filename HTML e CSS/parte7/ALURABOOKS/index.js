const menuIcon  = document.querySelector('.cabecalho-menu-hamburguer');
const menuLateral = document.querySelector('.menu-lateral');
const categoriaBtn= document.querySelector('.categoria-title');
const categoriaMenu = document.querySelector('.categorias-menu');

const toggleCabecalho = () => {
  menuIcon.classList.toggle('menu-ativo');
  menuLateral.classList.toggle('menu-lateral--ativo')
}

menuIcon.addEventListener('click', toggleCabecalho)

const toggleMenuCategorias = () => {
  categoriaBtn.classList.toggle('categoria-ativo')
  categoriaMenu.classList.toggle('categorias-menu--ativo')
}

categoriaBtn.addEventListener('click', toggleMenuCategorias)
