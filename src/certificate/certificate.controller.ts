import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {CertificateService} from "./certificate.service";

@Controller("certificates")
export class CertificatesController {
    constructor(private readonly certificateService: CertificateService) {
    }

    @Post()
    create(@Body() plantId: string) {
        return this.certificateService.generate(plantId);
    }

    @Get()
    findAll() {
        return this.certificateService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.certificateService.findOne(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateCertificateDto: UpdateCertificateDto) {
    //   return this.certificateService.update(id, updateCertificateDto);
    // }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.certificateService.remove(id);
    }
}
