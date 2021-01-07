import { IsNotEmpty } from "class-validator";

export class PaginationDto {
    @IsNotEmpty()
    skip: number;

    @IsNotEmpty()
    take: number
}