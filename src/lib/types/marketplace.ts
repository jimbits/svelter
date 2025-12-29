 export interface MarketItem {
    id:          number;
    name:        string;
    category:    string;
    variety:     string;
    description: string;
    price:       number;
    condition:   string;
    images:      string[];
    seller:      string;
    location:    string;
    postedDate:  Date;
}
 