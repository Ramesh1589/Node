var homecontroller =  {};
homecontroller.get = function (req, res){
    res.render("home", {
        view: "about"
        
    });
};

homecontroller.post = function (req, res){
    console.log(req.params);
    res.send("form posted");
};

homecontroller.put = function (req, res){
    
    };

homecontroller.delete = function (req,res){
    
};
module.expotrs = homecontroller;