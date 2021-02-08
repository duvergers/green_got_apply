export default (req, res) => {
  
    switch (req.method) {
        // routes for GET methods
        case 'GET':
        //  route on /api/greetings with a first_name parameter that returns a simple "Hello ${first_name}!" in the payload key of a JSON object
        res.status(200).json({ name: `Hello ${req.query.param}`})
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
  