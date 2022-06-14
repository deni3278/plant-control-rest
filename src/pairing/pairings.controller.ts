import {Body, Controller, Delete, Get, NotFoundException, Param, Post} from "@nestjs/common";
import {PairingService} from "./pairing.service";
import {CreatePairingDto} from "./dto/create-pairing.dto";
import {Pairing, PairingDocument} from "./pairing.schema";

@Controller("pairings")
export class PairingsController {
    constructor(private readonly pairingService: PairingService) {
    }

    @Post()
    async create(@Body() createPairingDto: CreatePairingDto) {
        const pairing = await this.pairingService.create(<Pairing>createPairingDto);

        return (pairing as PairingDocument)._id
    }

    @Get()
    findAll() {
        return this.pairingService.findAll();
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        const pairing = await this.pairingService.findOne(id);

        if (pairing === null) throw new NotFoundException();

        return pairing;
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updatePairingDto: UpdatePairingDto) {
    //   return this.pairingService.update(id, updatePairingDto);
    // }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.pairingService.remove(id);
    }
}
