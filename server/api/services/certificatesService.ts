import {BaseService} from "./baseService";
import {Certificate, ICertificateModel} from "../models/certificate";
import {Plant} from "../models/plant";

export class CertificatesService extends BaseService<ICertificateModel>{
    constructor() {
        super(Certificate, [{path: "plant", model: Plant}]);
    }

}