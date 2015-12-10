/**
 * Created by yasemin on 12/9/2015.
 */
angular.module("AppService",[])
      .factory("TableFactory", function () {
          var TableFactory = [{
                 name: "Murray",
                 surname: "Kenzie",
                 email:"Murray@gmail.com",
                 age: "23",
                 status: "engineer",
                 country: " German"
              },
              {
                  name: "Randolph",
                  surname: "Montana",
                  email:"Montana@gmail.com",
                  age: "26",
                  status: "worker",
                  country: "England"
              },
              {
                  name: "Caiden",
                  surname: "Simon",
                  email:"James@gmail.com",
                  age: "33",
                  status: "worker",
                  country: "Italian"
              },
              {
                  name: "Ulric",
                  surname: "Simon",
                  email:"Simon@gmail.com",
                  age: "53",
                  status: "teacher",
                  country: "Italian"
              },
              {
                  name: "Ryan",
                  surname: "Gene",
                  email:"Gene@gmail.com",
                  age: "23",
                  status: "teacher",
                  country: " German"
              },
              {
                  name: "Randolph",
                  surname: "Blaze",
                  email:"Blaze@gmail.com",
                  age: "23",
                  status: "engineer",
                  country: "America"
              }]
          return TableFactory;
})

