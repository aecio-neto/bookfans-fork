# Template padrão da Aplicação

O layout padrão do site encontra-se em [`codigo-fonte/src/components/template.html`](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t6-pmv-ads-2024-2-e1-projbookfans/blob/main/codigo-fonte/src/components/template.html). Estabelece uma estrutura responsiva, dividida nas seguintes partes:

1. Barra lateral esquerda com menu de navegação
2. Cabeçalho (opcional)
3. Barra lateral direita de pesquisa (opcional)

A identidade visual é definida por CSS em [`codigo-fonte/src/assets/css/template.css`](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t6-pmv-ads-2024-2-e1-projbookfans/blob/main/codigo-fonte/src/assets/css/template.css), incluindo paleta de cores e tipografia.

O template pode ser usado como [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) por meio do script [`codigo-fonte/src/assets/js/template.js`](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t6-pmv-ads-2024-2-e1-projbookfans/blob/main/codigo-fonte/src/assets/js/template.js) da seguinte maneira:

```html
<script src="../assets/js/template.js"></script>
<bookfans-template src="../components/template.html" css="../assets/css/template.css" page-title="Título da Página">
    ...
</bookfans-template>
```
