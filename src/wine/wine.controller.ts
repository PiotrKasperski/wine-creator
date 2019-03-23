import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {WineService} from "./wine.service";
import {CreateWineDto} from "../dto/create-wine-dto";
import {Wine} from "./wine.entity";
import {Sugaring} from "./sugaring.entity";

@Controller('wine')
export class WineController {
    constructor(private readonly wineService: WineService){};
    @Get(':id')
    async getWine(@Param('id') id, @Req() req : any) :Promise<Wine>{
        return await this.wineService.getWine(id);
    }
    @Get()
    async getWines(@Req() req: any):Promise<Array<Wine>> {
        console.log(req.user);
        return await this.wineService.getWines(req.user);
    }
    @Post()
    async createWine(@Req() req :any,@Body() createWineDto: CreateWineDto): Promise<Wine>{
        console.log(req.user);
        return await this.wineService.addWine(createWineDto.name, req.user);
    }
    @Post(':id/addSugar')
    async addWineSuggaring(@Param('id') wineId,@Body() sugaring: Sugaring): Promise<Wine>{
        return await  this.wineService.addSugar(sugaring, wineId);
    }


}
