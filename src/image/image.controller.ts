import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    Param,
    Post,
    StreamableFile,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {ImageService} from './image.service';
import {CreateImageDto} from './dto/create-image.dto';
import {Image} from "./image.schema";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('images')
export class ImageController {
    constructor(private readonly imageService: ImageService) {
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() createImageDto: CreateImageDto, @UploadedFile() imageFile: Express.Multer.File) {
        const image: Image = {image: imageFile.buffer, plant: createImageDto.plant};
        return this.imageService.create(image);
    }

    @Get()
    findAll() {
        return this.imageService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.imageService.findOne(id);
    }

    @Get("plants/:id")
    @Header('Content-Type', 'image/jpeg')
    @Header("Content-Disposition", "inline; filename=image.jpg")
    async findOneByPlantId(@Param('id') id: string) {

        const image = await this.imageService.findOneByPlantId(id);
        return new StreamableFile(image.image);
    }

    //
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    //   return this.imageService.update(id, updateImageDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.imageService.remove(id);
    }
}
