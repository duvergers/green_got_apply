export default (req, res) => {
    switch (req.method) {
      // routes for GET methods
      case 'GET':
        // no GET route
        break
      // routes for POST methods
      case 'POST':
        // returns the keys and the values fully capitalized into the payload key of a JSON object
        
        let res_obj = {}
        let response_code = 200;

        // uppercase on all the entries of the JSON object sent 
        Object.entries(req.body).forEach(element => {

            // test if the name contains only letters 

            if(element[1].match("^[a-zA-Z]+$") != null){
                res_obj[`Uppercased ${element[0]}`] = element[1].toUpperCase();
            } else {
                response_code = 401;
                //break
            }

        });

        if(response_code === 401){
            res.status(401).send('There is a non letter character in the data');
        } else {
            res.status(200).json(res_obj)
        }


        break
      default:
        res.status(400).end('Method not allowed') //Method Not Allowed
        break
    } 
}
  