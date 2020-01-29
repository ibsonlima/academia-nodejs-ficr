const data = {
    title: 'Meu currículo',
    name: 'William Oliveira',
    profession: 'Software Engineer',
    description: 'Experiência em desenvolvimento de single page applications com JavaScript e frameworks JavaScript (já trabalhei com Angular e React), module bundlers, package managers, transpilers (como Babel), pre processadores CSS (Sass e Stylus), task managers, arquitetura CSS (como BEM e SMACSS), Git, SEO, acessibilidade e usabilidade.',
    experience: [{
            company: 'Loggi Tecnologia',
            office: 'Software Engineer',
            description: 'Trabalho no squad de desenvolvimento do software de gestão de warehouses da Loggi, o ProXD. Nosso trabalho é automatizar os processos de recebimento, gestão, armazenamento, transferências e expedição de pacotes, cortes, rotas e monitoramento dos pacotes e sacas de entregas para ecommerces.'
        },
        {
            company: 'Casa do Código',
            office: 'Escritor',
            description: 'Autor do livro: O universo da programação: Um guia de carreira em desenvolvimento de software'
        }
    ],
    education: [{
        institution: 'Vida',
        description: 'Sobrevivência nas ruas'
    }],
    skills: ['backend', 'frontend', 'infra', 'mobile']
}

// Add get all biblioteca facebook
// var FB = require('fb');
// FB.setAccessToken('EAAC9PLrWx4sBAHujctuE0uSOdwzq8dEJEmOwnnSjp4Oq1EMrSeHPPRxSg0PlaMCbyVZCdwqZBFQIg96ckjcEqJ7SKAqocy991ZAO2XWAjqkEOmfSfnnOKPGZCpAZCEimSPDMORFYmkZAtIYuHuc2eHcowIllxYWtT56aKB2G0h3QZDZD');
// FB.api('/me', {
//         locale: 'en_US',
//         fields: 'first_name ,last_name, location{name}, birthday, gender, email, picture.type(large)',
//     },
//     function (response) {
//         console.log(response);
//     }
// );

const axios = require('axios');
// axios.get('https://api.github.com/users/ibsonlima')
//     .then(function (response) {
//         console.log(response.data);
//     })

//     .catch(function (error) {
//         console.log(error);
//     })

axios.get('https://api.github.com/users/ibsonlima/repos')
    .then(function (response) {
        var ibsonrepots = response;
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })