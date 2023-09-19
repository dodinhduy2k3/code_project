module.exports.index=(req,res)=>{
    res.render("client/page/products/index.pug"),{
        pagetitle: "trang Danh Sách Sản phâme",
    }};

module.exports.edit=(req,res)=>{
    res.send("chỉnh sửa")
}

