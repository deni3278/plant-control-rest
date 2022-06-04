import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CertificateService } from "./certificate.service";
import { CreateCertificateDto } from "./dto/create-certificate.dto";
import { Certificate } from "./certificate.schema";

@Controller("certificates")
export class CertificatesController {
  constructor(private readonly certificateService: CertificateService) {
  }

  @Post()
  create(@Body() createCertificateDto: CreateCertificateDto) {
    return this.certificateService.create(<Certificate>createCertificateDto);
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
