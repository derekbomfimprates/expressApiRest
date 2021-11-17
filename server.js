// 6 NECESSIDADES (constraints) para ser RESTful
// Uniform Interface: Manter uma uniformidade, uma constância, um padrão na construção da interface. Nossa API precisa ser coerente para quem vai consumi-lá. Precisa fazer sentido para o cliente e não ser confusa. Logo, coisas como: o uso correto dos verbos HTTP; endpoints coerentes (todos os endpoints no plural, por exemplo); usar somente uma linguagem de comunicação (json) e não várias ao mesmo tempo; sempre enviar respostas aos clientes; são exemplos de aplicação de uma interface uniforme.

// Client-server: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

// Stateless: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: A sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior. Nos nossos cursos, temos por padrão usar tokens para as comunicações.

// Cacheable: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

// Layered System: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

// Code on demand (optional): Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

// Resource is a object, has data e relationship.

//Good pratices:
// 1 - Use verbs HTTP.
// 2 - Dont use / in the end of endpoint
// 3 - Use always the same endpoint (pattern)
// 4 - Always have response to a client

// Verbs HTTP: 


// GET - receive data from resource 
// POST - send data to be process
// PUT - update data
// DELETE - delete a resource

// Response Status:

// 1xx: Information
// 2xx: Sucess
    // 200: OK
    // 201: CREATED
    // 204: Don't have content in PUT POST DELETE
// 3xx: Redirection
// 4xx: Client Error
    // 400: Bad Request
    // 404: Not Found!
// 5xx: Server Error 500: Internal Server Error

// https://localhost:3000/clients  endpoint clients (resource), URI - https://localhost:3000/clients
// data from https://jsonplaceholder.typicode.com/users
const express = require('express'); // call express 

const data= require('./data.json');

const app= express();

app.use(express.json()); // Express will use Json 

app.get("/clients", function(req, res){

    res.json(data);
});

app.get("/clients/:id", function(req, res) {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);
  
    if (!client) return res.status(204).json();
  
    res.json(client);
  });


app.post("/clients", function(req, res){
    const{name, email} = req.body;

    //save
    console.log(name);
    res.json({name, email});
});
app.put("/clients/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if (!client) return res.status(204).json();

    const{name} = req.body;
    client.name=name;

    res.json(client);



});
app.delete("/clients/:id", function(req, res){
    const { id } = req.params;
    const clientFiltered = data.filter(client=>client.id!=id)

    res.json(clientFiltered);
    
});

app.listen(3000, function(){
    console.log('Server is running');
}) // start server, port 3000
