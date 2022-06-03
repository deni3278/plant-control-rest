import { PartialType } from "@nestjs/mapped-types";
import { CreatePairingDto } from "./create-pairing.dto";

export class UpdatePairingDto extends PartialType(CreatePairingDto) {
}
