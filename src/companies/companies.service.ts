import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async findAll(): Promise<Company[]> {
    return await this.companyRepository.find();
  }

  async create(company: CreateCompanyDto): Promise<Company> {
    return await this.companyRepository.save(company);
  }

  async findOne(id: string): Promise<Company> {
    return await this.companyRepository.findOne(id);
  }

  async remove(id: string): Promise<Company> {
    const companyToRemove = await this.companyRepository.findOne(id);
    return await this.companyRepository.remove(companyToRemove);
  }

  async update(
    id: string,
    updateCompanyDto: CreateCompanyDto,
  ): Promise<Company> {
    return await this.companyRepository.save({
      ...updateCompanyDto,
      id: Number(id),
    });
  }
}
