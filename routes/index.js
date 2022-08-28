const express = require("express");
const router = express.Router();

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

var session = require('express-session');
var app = express();
app.use(session({ secret: '123456', resave: true, saveUninitialized: true }));



router.get("/", function (req, res) {
  res.send("mensaje: soy el API");
});


//insertar registro User
router.post("/insertar_User",urlencodedParser, function (req, res) {
   const datos = req.body;
  const Nombre = req.body.Nombre;
  const Correo = req.body.Correo;
  const UserName = req.body.UserName;
  const Password = req.body.Password;


//console.log(urlencodedParser)  
 //const x="";
 //  const consulta=x.concat('insert into usuarios(Nombre,Correo,UserName,Password) value("',Nombre,'","',Correo,'","',UserName,'","',Password,'")')
//console.log(consulta)
//console.log(datos)  
   req.getConnection((err, conn) => {
        if (err) return res.send(err)    
          const x="";
           const consulta=x.concat('insert into usuarios(Nombre,Correo,UserName,Password) value("',Nombre,'","',Correo,'","',UserName,'","',Password,'")')
   
             conn.query(consulta, [req.body], (err, result,rows) => {
                if (err)
                { res.send(err)}
                else{   
                        res.status(200).send({ save:1 });                 
                           if(res.status(200))
                           {
                                console.log('Usuario Almacenado')
                                console.log(result)

                  
                          }  
                     }                 
               
            }
        )
    })

});









//insertar registro Partidos
router.post("/insertar_registros",urlencodedParser, function (req, res) {
   const datos = req.body;
  const Fecha = req.body.Fecha;
  const local = req.body.local;
  const visitante = req.body.visitante;
  var Gol_l = req.body.Gol_l;
  var Gol_v = req.body.Gol_v;
   const user_id = req.body.user_id;

if(Gol_l==''){Gol_l=null}
if(Gol_v==''){Gol_v=null}

//console.log(urlencodedParser)  
//  const x="";
//  const consulta=x.concat('insert into Partidos(Usuario,Fecha,Local,Visitante,Goles_Local,Goles_Visitante) value("',user,'","',Fecha,'",',local,',',visitante,',',Gol_l,',',Gol_v,')')
// console.log(consulta)
//console.log(datos)  
   req.getConnection((err, conn) => {
        if (err) return res.send(err)    
          const x="";
             const consulta=x.concat('insert into Partidos(Usuario,Fecha,Local,Visitante,Goles_Local,Goles_Visitante) value("',user_id,'","',Fecha,'",',local,',',visitante,',',Gol_l,',',Gol_v,')')
             conn.query(consulta, [req.body], (err, result,rows) => {
                if (err)
                { res.send(err)}
                else{   
                        res.status(200).send({ save:1 });                 
                           if(res.status(200))
                           {
                                console.log('Registro Almacenado')
                                console.log(result)

                  
                          }  
                     }                 
               
            }
        )
    })

});


//mostrar registros Partidos
router.post("/Todos",urlencodedParser, function (req, res) {
    const y=req.body.num;
    console.log(y)
   req.getConnection((err, conn) => {
        if (err) return res.send(err)    
        
        const consulta="select p.id,u.UserName,convert(p.Fecha,date) as Fecha,E.Nombre AS LOCAL,P.GOLes_Local,E2.Nombre AS VISITANTE,P.GOLes_Visitante from Partidos P JOIN equipos E ON P.LOCAL=E.Id JOIN equipos E2 ON P.VISITANTE=E2.Id Join usuarios u on p.usuario=u.id order by Fecha DESC";
        conn.query(consulta, [req.body],(err, result,fields) => {
                if (err) 
                { res.send(err)}
                else{  
                   console.log(result)             
                   res.status(200).send({ result })
               }
            }
        )
    }) 


});



//mostrar Equipos
router.post("/MostrarEquipos",urlencodedParser, function (req, res) {
    const y=req.body.num;
    console.log(y)
   req.getConnection((err, conn) => {
        if (err) return res.send(err)    
        
        const consulta="select * from equipos";
        conn.query(consulta, [req.body],(err, result,fields) => {
                if (err) 
                { res.send(err)}
                else{  
                   console.log(result)             
                   res.status(200).send({ result })
               }
            }
        )
    }) 


});



//mostrar registros where user
router.post("/ShoWhere",urlencodedParser, function (req, res) {
  const UserName = req.body.UserName;
  const Password = req.body.Password;



   req.getConnection((err, conn) => {
        if (err) return res.send(err)    

           const x="";
           const consulta=x.concat('select *  from usuarios where UserName="',UserName,'"and Password="',Password,'"')
      console.log(consulta) 
        conn.query(consulta, [req.body],(err, result,fields) => {
                if (err)
                {res.send(err)}
                 else{
                                  
                      if(result.length>0)
                           {
                            res.status(200).send({ existe:1, userid:result[0].Id });                                        
                            console.log(result[0].Id)                   
                          }    
                          else
                          { res.status(200).send({ existe:0 });  } 
                // res.status(200).send(result)  
                    console.log(result);
                }

            }
        )
     }) 


});



//Actualizar registros 
router.post("/update",urlencodedParser, function (req, res) {
  var Gol_l = req.body.Gol_l;
  var Gol_v = req.body.Gol_v;
   const Id_reg = req.body.Id_reg;

    console.log(Gol_l)
console.log(Gol_v)
    console.log(Id_reg)


   req.getConnection((err, conn) => {
        if (err) return res.send(err)    

           const x="";
           const consulta=x.concat('update partidos set Goles_Local="',Gol_l,'", Goles_Visitante="',Gol_v,'" where Id="',Id_reg,'"')
      console.log(consulta) 
        conn.query(consulta, [req.body],(err, result,fields) => {
                 if (err)
                { res.send(err)}
                else{   
                        res.status(200).send({ save:1 });                 
                           if(res.status(200))
                           {
                                console.log('Registro Actualizado')
                                console.log(result)

                  
                          }  
                     }  
            })
     }) 


});


// //Eliminar registro
// router.post("/delete", function (req, res) {
//    const Id_reg = req.body.Id_reg;
    

//    req.getConnection((err, conn) => {
//         if (err) return res.send(err)    

//            const x="";
//            const consulta=x.concat('delete from partidos where Id="',nombre,'"')
//     //  console.log(consulta) 
//         conn.query(consulta, [req.body],(err, result,fields) => {
//                 if (err) return res.send(err)  
//                // console.log(result) 
//                    res.status(200).send('registro eliminado')
//             })
//      }) 


// });



module.exports = router;
//module.exports = app;
