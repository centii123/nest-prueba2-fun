import { PaginationQueryDTO } from './DTO/pagination-query.dto';
import { Controller, Get, Post, Body, Query ,UsePipes , ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { nombresDTO } from './DTO/nombres.dto';
import { MuchosAmuchosService } from './servicios/muchos-amuchos/muchos-amuchos.service';


@Controller()
export class AppController {
  constructor(private appService: AppService, private muchos:MuchosAmuchosService) {}

  @Get()
  @UsePipes(ValidationPipe) //para la paginacion
  getHello(@Query() paginacion:PaginationQueryDTO) {
      let hola=this.appService.getHello(paginacion);
      /*hola.then(
        e=>{
          return e
        }
      ) */
      
      
      return hola
      
  }

  /*@Get('/join')
  joinMas(){
    let hola=this.muchos.join()
    return hola;
  }*/

  @Post()
  ingresar(@Body() datos:nombresDTO){
    const a=datos
    let respuesta=this.appService.post(a['descripccion'])
    console.log(respuesta)
  }
}
