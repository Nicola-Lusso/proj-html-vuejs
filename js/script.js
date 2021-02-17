const app = new Vue({
  el: '#app',
  data: {
    menu: [
           'Home',
           'Shop',
           'Products',
           'Categories',
           'News',
           'Elements',
          ],
      column1: {
        logo: "img/logo.png",
        info: [
               "12345 North Main Street,",
               "New York, NY 55555",
               "Phone: 1.800.555.6789",
               "Email:info@company.com",
               "Web: Theme-Fusion.com",
              ],

        socials: [
         "fab fa-facebook-f",
          "fab fa-twitter",
          "fab fa-instagram",
          "fab fa-youtube",

         ],
       },
       column2: {
       titolo: "top rated products",
       info: [
         {
           capo: "Leather Gloves",
           price: "$45",
           articolo: "img/gloves.jpg",
         },

         {
           capo: "Black Leather Jacket",
           firstprice: "$235",
           price: "$200",
           articolo: "img/articolo3.jpg",
         },

         {
           capo: "Spring Printed Dress",
           price: "$47",
           articolo: "img/articolo1.jpg",
         },
       ],
     },
     column3: {
      titolo: "recent post",
      info: [
        "Anean lobortis sapien enim viverra",
        "Duis ac massa semper maximus",
        "Nunc fermint nulla eu justo sem id",
        "Aliquam posuere magna eget nibh",
        "Cras ac nulla ac consecte rutrum",
        "Fusce mattis nunc ut aliquam",
      ],
    },
    column4: {
      titolo: "tags",
      tags:[
        ["Black", "boots", "Brown", "Casual"],
        ["D&G", "Fabric", "flowers", "Grey"],
        ["hat", "Hipster", "lines"],
        ["multi-purpose", "New York"],
        ["Outdors", "red", "responsive"],
        ["summer", "sweater", "Travel"],
        ["Warm", "White", "winter"],
      ],
    },

    copy: [
      "@copyright 2012-2020 |",
      " Avada Theme by Theme Fusion |",
      " All Rights Ressrved |",
      " Powered by Wordrepss",
    ],
    payment: "img/payment.png",

  }
})
