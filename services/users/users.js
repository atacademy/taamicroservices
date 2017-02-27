import models from '../../models'
import restify from 'restify'
import bunyan from 'bunyan'
import os from 'os'

const log = bunyan.createLogger( { name: 'users', level: 'DEBUG' } )

export function startServer() {
  var PATH ='/users'
  // Create a restify server
  const server = restify.createServer()
  // Set CORS
  server.use( restify.CORS() )
  //Set parser
  server.use(restify.bodyParser({ mapParams: true}))
  // Endpoint for getting user information
  server.get({path : PATH + '/:userid', version : '0.0.1'}, getUser)
  // Endpoint for user creation
  server.post({path : PATH , version : '0.0.1'}, postNewUser)
  server.listen( process.env.PORT || 8080, process.env.IP || "0.0.0.0", () =>
    log.info( '%s listening at %s', server.name, server.url )
 ) 
}
function postNewUser(req,res,next){
  var newUser = {}
  newUser.userid = req.params.userid
  newUser.firstname = req.params.firstname
  newUser.lastname = req.params.lastname
  newUser.age = req.params.age
  newUser.addresses = req.params.addresses
  
  res.setHeader('Access-Control-Allow-Origin','*')
  
  models.user.upsert(newUser, { include: models.address, logging: log.debug.bind(log) }, function(err, success){
    console.log('Response success '+success)
    console.log('Response error '+err)
    if(success){
      res.send(201, newUser)
      return next()
    }else{
      return next(err)
    }
  })
}
function getUser(req, res, next){
   res.header('Host', os.hostname() ) // For scaling demonstration
    models.user.findOne( { where: { userid: req.params.userid },
      include: models.address, logging: log.debug.bind(log) } ).then( (user) => {
        if ( user ) res.send(user)
        else res.send(new restify.NotFoundError('user ' +
          req.params.userid + ' not found'))
        next()
      })
}
