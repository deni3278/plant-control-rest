import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { PairingService } from "./pairing.service";
import { CreatePairingDto } from "./dto/create-pairing.dto";
import { Pairing } from "./pairing.schema";

@Controller("pairings")
export class PairingsController {
  constructor(private readonly pairingService: PairingService) {
  }

  @Post()
  create(@Body() createPairingDto: CreatePairingDto) {
    return this.pairingService.create(<Pairing>createPairingDto);
  }

  @Get()
  findAll() {
    return this.pairingService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.pairingService.findOne(id);
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
