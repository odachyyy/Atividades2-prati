# Atividades de Lógica em JavaScript (Node.js)

Este repositório contém uma série de 9 atividades de programação resolvidas em JavaScript, projetadas para praticar e demonstrar conceitos que vão do básico ao avançado. Os exercícios são executados no ambiente Node.js e cobrem tópicos como estruturas de controle, funções, recursão, manipulação de arrays e objetos, e padrões de programação funcional.

## ✨ Tecnologias Utilizadas

* **JavaScript**
* **Node.js**
* **Git & GitHub** para versionamento de código.
* **prompt-sync**: Biblioteca para interação com o usuário via terminal.

## 🚀 Atividades Desenvolvidas

O projeto está dividido em três seções temáticas. Cada atividade possui um link para o arquivo com o código-fonte correspondente.

---

### 🌟 Seção 1: Estruturas de Controle Avançadas

* **1. Validação de Datas:** Cria a função `ehDataValida(dia, mes, ano)` que retorna `true` se os valores formarem uma data real, considerando meses de 28–31 dias e ano bissexto para fevereiro. ([Ver código](AtividadePrati-1.js))

* **2. Jogo de Adivinhação:** Script que gera um número aleatório de 1 a 100 e pede ao usuário para adivinhar, usando um loop `while` e dando dicas de "mais alto" ou "mais baixo". ([Ver código](AtividadePrati-2.js))

* **3. Palavras Únicas:** Dada uma string (ex.: "olá olá mundo mundo"), usa `if/else` e `for` para extrair todas as palavras únicas e exibi-las em um array. ([Ver código](AtividadePrati-3.js))

---

### 🧠 Seção 2: Funções e Recursão

* **4. Fatorial Recursivo:** Implementa a função `fatorial(n)` de forma recursiva, tratando casos de erro para `n < 0` e o caso base `n = 0`. ([Ver código](AtividadePrati-4.js))

* **5. Debounce:** Cria a função de ordem superior `debounce(fn, delay)` que retorna uma nova função que só executa `fn` se não for chamada novamente dentro do intervalo de `delay`. ([Ver código](AtividadePrati-5.js))

* **6. Memoization:** Implementa a função `memoize(fn)` que armazena em cache chamadas anteriores de `fn` (baseado nos argumentos), retornando resultados instantâneos em invocações repetidas. ([Ver código](AtividadePrati-6.js))

---

### 🗃️ Seção 3: Arrays e Objetos Complexos

* **7. Mapeamento e Ordenação:** A partir de um array de objetos `produtos`, retorna um novo array contendo apenas os nomes dos produtos, ordenados pelo preço em ordem crescente, usando os métodos `.sort()` e `.map()`. ([Ver código](AtividadePrati-7.js))

* **8. Agrupamento por Propriedade:** Utiliza o método `.reduce()` para agrupar um array de vendas por cliente, gerando um objeto com a soma do total de vendas para cada um. ([Ver código](AtividadePrati-8.js))

* **9. Conversão Entre Formatos:** Implementa duas funções: `paresParaObjeto` (converte um array de pares `[chave, valor]` para um objeto) e `objetoParaPares` (faz a conversão inversa). ([Ver código](AtividadePrati-9.js))

---

## 🔧 Como Executar o Projeto

1.  **Clone o repositório (substitua com seu usuário e nome do repositório):**
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd NOME-DO-SEU-REPOSITORIO
    ```
3.  **Instale as dependências necessárias:**
    ```bash
    npm install
    ```
4.  **Execute um arquivo de atividade específico usando o Node.js:**
    ```bash
    # Exemplo para a atividade 1
    node AtividadePrati-1.js
    ```