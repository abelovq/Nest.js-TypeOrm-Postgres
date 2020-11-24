import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto'
import { Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async getAll(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  async create(company: CreateCompanyDto): Promise<Company> {
    return await this.companyRepository.save(company);
  }
}
