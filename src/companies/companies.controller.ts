import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from 'src/companies/dto/create-company.dto';
import { Company } from './company.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Company> {
    return this.companiesService.findOne(id);
  }

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Company> {
    return this.companiesService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return this.companiesService.update(id, updateCompanyDto);
  }
}
