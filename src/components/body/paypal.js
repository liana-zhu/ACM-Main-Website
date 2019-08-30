// Render the PayPal button
paypal.Button.render({

    // Set your environment

    env: 'production', // sandbox | production

    // Specify the style of the button

    style: {
        layout: 'horizontal',  // horizontal | vertical
        // fundingicons: 'true',
        size: 'medium',
        tagline: 'false',
        shape: 'pill',      // pill | rect
        color: 'gold'     // gold | blue | silver | black
        // medium | large | responsive
    },

    // Specify allowed and disallowed funding sources
    //
    // Options:
    // - paypal.FUNDING.CARD
    // - paypal.FUNDING.CREDIT
    // - paypal.FUNDING.ELV

    funding: {
        allowed: [paypal.FUNDING.CARD],
        disallowed: []
    },

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create

    client: {
        production: 'ARi_JUtTDNePaEQj3Yc_AmHqtGm1J3FDhBA5W24dSldFFWYed14U_2hU4bNxZfAdqCEutIU7vhJBSOEc'
    },

    payment: function (data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: {total: '5.50', currency: 'USD'}
                    }
                ],


                redirect_urls: {
                    return_url: 'http://acm.calstatela.edu/',
                    cancel_url: 'http://acm.calstatela.edu/'
                }
            }
        });
    },


    onAuthorize: function (data, actions) {
        return actions.payment.execute().then(function () {
            window.alert('Payment Complete!');
        });
    },

    onCancel: function (data, actions) {
        window.location.replace("http://acm.calstatela.edu/");
        return actions.redirect();
    },

    onError: function (error) {
        // You will want to handle this differently
        return alert(error);
    },

    commit: 'true'

}, '#paypal-btn'
);

// paypal.Button.render({
//
//         // Set your environment
//
//         env: 'production', // sandbox | production
//
//         // Specify the style of the button
//
//         style: {
//             layout: 'horizontal',  // horizontal | vertical
//             // fundingicons: 'true',
//             size: 'medium',
//             tagline: 'false',
//             shape: 'pill',      // pill | rect
//             color: 'gold'     // gold | blue | silver | black
//             // medium | large | responsive
//         },
//
//         // Specify allowed and disallowed funding sources
//         //
//         // Options:
//         // - paypal.FUNDING.CARD
//         // - paypal.FUNDING.CREDIT
//         // - paypal.FUNDING.ELV
//
//         funding: {
//             allowed: [paypal.FUNDING.CARD],
//             disallowed: []
//         },
//
//         // PayPal Client IDs - replace with your own
//         // Create a PayPal app: https://developer.paypal.com/developer/applications/create
//
//         client: {
//             production: 'ARi_JUtTDNePaEQj3Yc_AmHqtGm1J3FDhBA5W24dSldFFWYed14U_2hU4bNxZfAdqCEutIU7vhJBSOEc'
//         },
//
//         payment: function (data, actions) {
//             return actions.payment.create({
//                 payment: {
//                     transactions: [
//                         {
//                             amount: {total: '10.50', currency: 'USD'}
//                         }
//                     ],
//
//                     redirect_urls: {
//                         return_url: 'http://acm.calstatela.edu',
//                         cancel_url: 'http://acm.calstatela.edu'
//                     }
//                 }
//             });
//         },
//
//
//         onAuthorize: function (data, actions) {
//             return actions.payment.execute().then(function () {
//                 window.alert('Payment Complete!');
//             });
//         },
//
//         onCancel: function (data, actions) {
//             window.location.replace("http://acm.calstatela.edu");
//             return actions.redirect();
//         },
//
//         onError: function (error) {
//             // You will want to handle this differently
//             return alert(error);
//         },
//
//         commit: 'true'
//
//     }, '#dollar10'
// );