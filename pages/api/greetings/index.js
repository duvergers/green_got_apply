export default (req, res) => {
  
  switch (req.method) {
    // routes for GET methods
    case 'GET':
      // just in case, a generic greetings route method
      res.status(402).send('Missing a parameter')

      break
    // routes for POST methods
    case 'POST':
      // no POST route
      break
    default:
      res.status(400).end('Method not allowed') //Method Not Allowed

      break
  }    
}
  