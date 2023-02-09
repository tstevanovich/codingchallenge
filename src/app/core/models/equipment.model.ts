export interface Equipment {
  modelId: string;
  schedule: Schedule;
  saleDetails: SaleDetails;
  classification: Classification;
}

export interface Classification {
  category: string;
  subcategory: string;
  make: string;
  model: string;
}

export interface SaleDetails {
  cost: number;
  retailSaleCount: number;
  auctionSaleCount: number;
}

export interface Schedule {
  years: Year[];
  defaultMarketRatio: number;
  defaultAuctionRatio: number;
}

export interface Year {
  year: string;
  marketRatio: number;
  auctionRatio: number;
}
