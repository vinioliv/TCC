const User = require('../models/User');
const Advertiser = require('../models/Advertiser');


module.exports = {
    async userimage(request, response){
        const img = request.file.filename
        const cd_usuario = request.headers.authorization;
       if(cd_usuario != null || cd_usuario != undefined)
       {
        await User.update({nm_img: img},{
            where: {
             cd_usuario: cd_usuario
            }
        });
        return response.status(200).json({msg: "Imagem de perfil alterada com sucesso" });
        }
     else{
        return response.status(401).json({msg: "Você não tem acesso para realizar essa opereção, verifique seu login"});
     }
    },
    async advertiserimage(request, response){
        const img = request.file.filename
        const cd_vendedor = request.headers.advertiserid;
       if(cd_vendedor != null || cd_vendedor != undefined)
       {
           await Advertiser.update({nm_img_negocio: img},{
               where: {
                   cd_vendedor: cd_vendedor
               }
            });
            return response.status(200).json({msg: "Imagem de perfil alterada com sucesso" });
        } else{
            return response.status(401).json({msg: "Você não tem acesso para realizar essa opereção, verifique seu login"});
          }
    }
}