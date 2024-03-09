const controller = {}

controller.index = (req,res) =>{
    res.send('SALUDO DESDE CONTROLLER')
}

module.exports = controller;