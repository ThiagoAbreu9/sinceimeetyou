/* eslint-disable max-classes-per-file */
import { Expose as JsonProperty, Type } from 'class-transformer';
import { ParsedQs } from 'qs';
import { BaseEntity } from './base.entity';

export class Sort {
  public property: string;
  public direction: 'ASC' | 'DESC' | string;
  constructor(sort: string) {
    if (sort) {
      [this.property, this.direction] = sort.split(',');
    }
  }

  asOrder(): any {
    const order = {};
    order[this.property] = this.direction;
    return order;
  }
}

export type PaginationQueryType = string | ParsedQs | (string | ParsedQs)[];

export class PageRequest {
  @JsonProperty()
  page = 0;
  @JsonProperty()
  size = 20;
  @Type(() => Sort)
  sort: Sort = new Sort('id,ASC');

  constructor(page: number | PaginationQueryType, size: number | PaginationQueryType, sort: PaginationQueryType) {
    this.page = PageRequest.handleNumberTypes(page, this.page);
    this.size = PageRequest.handleNumberTypes(size, this.size);
    this.sort = new Sort(PageRequest.handleQueryType(sort));
  }

  public static handleNumberTypes(pp: number | PaginationQueryType, fallback: number): number {
    if (typeof pp === 'number') {
      return pp;
    }
    const query = PageRequest.handleQueryType(pp);
    if (query) {
      const parsed = parseInt(query, 10);
      return Number.isNaN(parsed) ? fallback : parsed;
    }
    return fallback;
  }

  public static handleQueryType(pa: PaginationQueryType): string | undefined {
    pa = Array.isArray(pa) ? pa[0] : pa;
    if (typeof pa === 'string') {
      return pa;
    }
    return undefined;
  }
}

export class Page<T extends BaseEntity> {
  constructor(
    public content: T[],
    public total: number,
    public pageable: PageRequest,
  ) {}
}
