export interface Donation {
  title: string;
  price: string;
  tag: string;
  picture?: string;
}

export interface DonationObj {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: number[];
  price: string;
}
