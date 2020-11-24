import { Controller, Get, Post, Body } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from 'src/companies/dto/create-company.dto';
import { Company } from './company.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Get()
  findAll(): Promise<any[]> {
    return this.companiesService.getAll();
  }

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companiesService.create(createCompanyDto);
  }
}
