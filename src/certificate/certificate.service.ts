import { Injectable } from "@nestjs/common";
import { BaseService } from "../base.service";
import { Certificate, CertificateDocument } from "./certificate.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class CertificateService extends BaseService<Certificate> {
  constructor(@InjectModel(Certificate.name) private certificateModel: Model<CertificateDocument>) {
    super(certificateModel);
  }
}
