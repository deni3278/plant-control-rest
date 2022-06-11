import {Body, Controller, Delete, Get, NotFoundException, Param, Post} from "@nestjs/common";
import {CertificateService} from "./certificate.service";

@Controller("certificates")
export class CertificatesController {
    constructor(private readonly certificateService: CertificateService) {
    }

    @Post()
    create(@Body() dto: {plantId: string}) {
        return this.certificateService.generate(dto.plantId);
    }

    @Get()
    findAll() {
        return this.certificateService.findAll();
    }

    @Get(":id")
    async findOne(@Param("id") id: string) {
        const certificate = await this.certificateService.findOne(id);

        if (certificate === undefined) throw new NotFoundException();

        return certificate;
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
