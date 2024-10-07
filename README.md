
# Projeto Firebase: Arquitetura Escalável com Functions e Firestore

## Visão Geral
Este projeto demonstra uma arquitetura escalável para usar Firebase Functions e Firestore para gerenciar centenas de funções. A funcionalidade principal inclui criar um novo registro em uma coleção do Firestore através de uma função do Firebase e definir um atributo increment_id usando um trigger do Firestore onCreate.

## Arquitetura de Design
- Camada de Controle: Gerencia as requisições HTTP e interage com a camada de serviço.

- Camada de Serviço: Contém a lógica de negócios e interage com o Firestore.

- Camada de Trigger: Contém triggers do Firestore para operações como definir o increment_id.

- Testes: Testes automatizados para garantir que a funcionalidade funcione conforme o esperado.

## Estrutura do Projeto

```bash
functions/
├── src/
│   ├── controllers/
│   │   └── RecordController.js
│   ├── services/
│   │   └── FirestoreService.js
│   ├── triggers/
│   │   └── FirestoreTriggers.js
│   ├── tests/
│   │   └── RecordController.test.js
│   └── index.js
├── package.json
└── ...
```

## Endpoints
POST /createRecord: Cria um novo registro na coleção do Firestore com o próximo increment_id disponível.

Instalação
Clone o repositório: 
### Branch MASTER

```bash
git clone https://github.com/leandromartins1912/super-frete.git
cd super-frete/functions
```

Instale as dependências:

```bash
npm install
```

Inicialize o Firebase: Certifique-se de inicializar o Firebase no diretório do projeto:

```bash
firebase init
```

Inicie os emuladores:
```bash
firebase emulators:start
```

Implantação
Deploy das funções:

```bash
firebase deploy --only functions
```

Execução dos Testes

Para executar os testes, use o comando:

```bash
npm test
```
Uso
Crie um novo registro:
```bash
curl --location 'http://localhost:5001/firebase-super-frete/us-central1/createRecord' \
--header 'Content-Type: application/json' \
--data '{
  "name": "Example Record"
}'
```

Verifique o registro criado:

Acesse a interface do Firestore Emulator em http://localhost:4000.

Navegue até a coleção records para ver o registro criado com o increment_id definido.

Esta documentação fornece um guia claro sobre a arquitetura do projeto, instalação, implantação e uso, garantindo que o projeto esteja pronto para escalar e gerenciar centenas de funções de forma eficiente. 🚀

Se precisar de mais alguma coisa, estarei por aqui! 😊
