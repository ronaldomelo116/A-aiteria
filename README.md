# 🍇 Açaí Puro Sabor — Site Institucional

Site institucional e de pedidos de uma açaíteria, desenvolvido com **HTML**, **CSS** e **JavaScript** puros — sem frameworks ou bibliotecas externas. Projeto focado em boas práticas de acessibilidade, design responsivo (mobile-first) e performance.

---

## 🚀 Demonstração

> Abra o arquivo `index.html` diretamente no navegador ou sirva com um servidor local (ex: Live Server no VS Code).

---

## 📁 Estrutura de Arquivos

```
Açaiteria/
├── index.html          # Estrutura principal da página
├── style.css           # Estilos (mobile-first + responsivo)
├── script.js           # Interatividade (menu, carrossel, formulário)
├── privacidade.html    # Página de Política de Privacidade
├── assets/
│   └── img/            # Imagens do projeto
│       ├── logo.svg
│       ├── acai-bowl.png
│       ├── acai-tradicional.png
│       ├── acai-trufado.png
│       ├── acai-tropical.png
│       └── creme-cupuacu.png
└── README.md
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| **HTML5** semântico | Estrutura e acessibilidade |
| **CSS3** puro | Estilização, animações, responsividade |
| **JavaScript** vanilla | Menu hambúrguer, carrossel, formulário |
| **Bootstrap Icons** (CDN) | Ícones do rodapé (Instagram, WhatsApp, etc.) |

---

## 📐 Funcionalidades

### 🔝 Header Fixo (Sticky)
- Fixo no topo com `position: fixed` e `z-index: 1000`
- Fundo roxo com sombra sutil

### 🍔 Menu Hambúrguer (Mobile)
- Botão visível apenas no mobile (abaixo de 768px)
- Animação de **☰ → X** ao abrir/fechar usando CSS `transform`
- Menu abre em **coluna** com animação cascata da direita para esquerda (`@keyframes slideFromRight`)
- Fecha automaticamente ao clicar em qualquer link

### 🧭 Navegação Responsiva
- **Mobile:** logo à esquerda + hambúrguer à direita; menu em coluna oculto
- **PC (≥768px):** logo + links + botão CTA em linha horizontal (`display: flex`)
- Links com `scroll-behavior: smooth` e `scroll-padding-top` para compensar o header fixo

### 🏠 Hero Section (Sobre)
- Layout em coluna no mobile, lado a lado no PC
- Título, subtítulo e botão "Ver Cardápio"
- Imagem com `border-radius` e sombra suave

### 🛒 Cardápio em Carrossel
- Scroll horizontal com `overflow-x: auto` e `scroll-snap-type: x mandatory`
- Scrollbar oculta (nativa e WebKit)
- **4 produtos:** Açaí Tradicional, Barca Trufada, Açaí Tropical, Creme de Cupuaçu
- Cards com `border-radius: 16px`, sombra e efeito hover:
  - `transform: scale(1.1)` no card inteiro
  - `box-shadow` duplo (externa + `inset` roxo)
  - `overflow: hidden` + `will-change: transform` + `isolation: isolate` para preservar bordas arredondadas
- **Setas de navegação** (◀ ▶) visíveis no PC, posicionadas com `position: absolute` nas laterais do carrossel
- Imagens com `loading="lazy"` para performance

### ❓ FAQ (Dúvidas Frequentes)
- Acordeão puro em CSS usando **Checkbox Hack** (sem JavaScript)
- Ícone animado **+ → −** feito com `::before` e `::after`
- Animação fluida de altura com **CSS Grid** (`grid-template-rows: 0fr → 1fr`)
- Acessibilidade por teclado via `focus-visible`

### 📋 Formulário de Pedido
- Integrado com **WhatsApp** via link `api.whatsapp.com`
- Campos: Nome, WhatsApp (com validação de padrão), Pedido (textarea)
- Validações HTML5: `required`, `maxlength`, `pattern`
- Estilização de foco com `outline` e `box-shadow` roxo
- Botão de envio ocupa largura total

### 🦶 Rodapé
- Links para redes sociais: Instagram, WhatsApp, Facebook, YouTube
- Ícones Bootstrap Icons com hover animado (`translateY` + `scale`)
- Link para Política de Privacidade
- Copyright

---

## 🎨 Paleta de Cores

```css
--color-primary:    #5B176E   /* Roxo Açaí — fundo do header */
--color-secondary:  #8E2AAE   /* Roxo Vibrante — hover */
--color-accent:     #B7D52A   /* Verde Lima — botões de destaque */
--color-background: #FFF8EE   /* Creme Claro — fundo geral */
--color-text:       #24152A   /* Roxo escuro — texto (WCAG AA) */
```

---

## ♿ Acessibilidade

- Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<figure>`
- `aria-label` e `aria-expanded` no menu hambúrguer
- `alt` descritivo em todas as imagens
- Navegação por teclado no FAQ (`focus-visible`)
- Contraste de cores seguindo diretrizes **WCAG AA**
- `lang="pt-BR"` no HTML
- Meta `description` e Open Graph para compartilhamento social

---

## 📱 Responsividade (Mobile-First)

| Breakpoint | Comportamento |
|---|---|
| **< 768px** (Mobile) | Menu hambúrguer, layout em coluna, carrossel com scroll |
| **≥ 768px** (PC/Tablet) | Header em linha, setas do carrossel visíveis, hero lado a lado |

---

## 🧠 Técnicas CSS Utilizadas

| Técnica | Aplicação |
|---|---|
| `position: fixed` | Header sempre visível ao rolar |
| `display: flex` | Layout do header, hero, cards, formulário |
| `scroll-snap-type` | Carrossel com snap suave |
| `@keyframes` | Animação cascata do menu mobile |
| **Checkbox Hack** | FAQ sem JavaScript |
| `grid-template-rows` | Animação de altura no FAQ |
| `::before` / `::after` | Ícone + / − do FAQ |
| `overflow: hidden` + `will-change` | Hover no card sem vazar bordas |
| `box-shadow` múltiplo | Sombra externa + inset no hover do card |
| `position: absolute` | Setas do carrossel nas laterais |
| `nth-child` + `animation-delay` | Cascata do menu mobile |

---


## 👨‍💻 Autor

Desenvolvido por **Ronaldo Mello**  
© 2026 Açaí Puro Sabor. Todos os direitos reservados.
